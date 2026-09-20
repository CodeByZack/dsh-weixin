import QRCode from 'qrcode';
import { resolveRpcAuthority } from '../../rpc-authority.mjs';
import {
  publicWorkspaceError,
  SET_WORKSPACE_ENDPOINT,
  validWorkspacePayload,
} from '../shared/workspace-rpc.mjs';
import {
  SET_AGENT_PRESET_ENDPOINT,
  validAgentPresetPayload,
} from '../shared/agent-preset-rpc.mjs';
import {
  connectionTestTargetUnavailable,
  publicConnectionTestResult,
} from '../../../../src/channels/shared/connection-test.mjs';

export const WEIXIN_RPC_CHANNEL = '/weixin';
export const WEIXIN_ENDPOINTS = Object.freeze({
  status: 'connection.status',
  beginProvisioning: 'provision.begin',
  pollProvisioning: 'provision.poll',
  submitVerification: 'provision.verify',
  cancelProvisioning: 'provision.cancel',
  reconnectBot: 'bot.reconnect',
  deleteBot: 'bot.delete',
  setWorkspace: SET_WORKSPACE_ENDPOINT,
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT,
});
export const WEIXIN_RPC_ENDPOINTS = Object.freeze(Object.values(WEIXIN_ENDPOINTS));

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function exactKeys(value, allowed) {
  return isRecord(value) && Object.keys(value).every((key) => allowed.includes(key));
}

function validId(value) {
  return typeof value === 'string' && /^[A-Za-z0-9_-]{1,128}$/.test(value);
}

function payloadFailure(endpoint, payload) {
  if (!isRecord(payload)) return 'Payload must be an object.';
  if (endpoint === WEIXIN_ENDPOINTS.status) {
    return exactKeys(payload, []) ? null : 'connection.status does not accept fields.';
  }
  if (endpoint === WEIXIN_ENDPOINTS.beginProvisioning) {
    return exactKeys(payload, ['locale']) && (payload.locale === undefined || payload.locale === 'zh-CN')
      ? null
      : 'provision.begin received unsupported fields.';
  }
  if ([WEIXIN_ENDPOINTS.pollProvisioning, WEIXIN_ENDPOINTS.cancelProvisioning].includes(endpoint)) {
    return exactKeys(payload, ['attemptId']) && validId(payload.attemptId)
      ? null
      : `${endpoint} requires an attemptId.`;
  }
  if (endpoint === WEIXIN_ENDPOINTS.submitVerification) {
    return exactKeys(payload, ['attemptId', 'verifyCode'])
      && validId(payload.attemptId)
      && typeof payload.verifyCode === 'string'
      && /^\d{4,8}$/.test(payload.verifyCode)
      ? null
      : 'provision.verify requires an attemptId and a 4-to-8-digit code.';
  }
  if (endpoint === WEIXIN_ENDPOINTS.reconnectBot) {
    return exactKeys(payload, ['botId', 'sendTest'])
      && validId(payload.botId)
      && (payload.sendTest === undefined || payload.sendTest === true)
      ? null
      : 'bot.reconnect requires a botId and optional sendTest=true.';
  }
  if (endpoint === WEIXIN_ENDPOINTS.deleteBot) {
    return exactKeys(payload, ['botId', 'confirm']) && validId(payload.botId) && payload.confirm === true
      ? null
      : 'bot.delete requires a botId and confirm=true.';
  }
  if (endpoint === WEIXIN_ENDPOINTS.setWorkspace) {
    return validWorkspacePayload(payload)
      ? null : '请输入工作区绝对路径。';
  }
  if (endpoint === WEIXIN_ENDPOINTS.setAgentPreset) {
    return validAgentPresetPayload(payload)
      ? null : '请选择 Agent Preset。';
  }
  return 'Unknown Weixin endpoint.';
}

function badRequest(message) {
  return { ok: false, error: { code: 'bad-request', message } };
}

function cancelled() {
  return { ok: false, error: { code: 'cancelled', message: 'The request was cancelled.' } };
}

function internalFailure() {
  return {
    ok: false,
    error: { code: 'weixin-operation-failed', message: '微信操作失败，请稍后重试。' },
  };
}

async function qrDataUrl(value) {
  return QRCode.toDataURL(value, {
    type: 'image/png',
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 320,
  });
}

async function withEncodedQr(value, encodeQr) {
  if (!value || !value.verificationUrl) return value;
  return {
    ...value,
    qrCodeDataUrl: await encodeQr(value.verificationUrl),
  };
}

async function publicStatus(status, encodeQr) {
  const safe = structuredClone(status);
  if (safe.provisioning) safe.provisioning = await withEncodedQr(safe.provisioning, encodeQr);
  return safe;
}

function assertController(controller) {
  if (!controller
    || typeof controller.status !== 'function'
    || typeof controller.startProvisioning !== 'function'
    || typeof controller.registrationStatus !== 'function'
    || typeof controller.submitVerification !== 'function'
    || typeof controller.cancelProvisioning !== 'function'
    || typeof controller.reconnectBot !== 'function'
    || typeof controller.deleteBot !== 'function') {
    throw new TypeError('A complete Weixin controller is required');
  }
}

export function createWeixinRpcHandler(controller, { encodeQr = qrDataUrl } = {}) {
  assertController(controller);
  const qrCache = new Map();
  const cachedEncode = (url) => {
    let encoded = qrCache.get(url);
    if (!encoded) {
      if (qrCache.size >= 16) qrCache.delete(qrCache.keys().next().value);
      encoded = Promise.resolve().then(() => encodeQr(url));
      qrCache.set(url, encoded);
    }
    return encoded;
  };

  return async (endpoint, payload, signal) => {
    if (signal?.aborted) return cancelled();
    if (!WEIXIN_RPC_ENDPOINTS.includes(endpoint)) return badRequest('Unknown Weixin endpoint.');
    const invalid = payloadFailure(endpoint, payload);
    if (invalid) return badRequest(invalid);

    try {
      let value;
      if (endpoint === WEIXIN_ENDPOINTS.status) {
        value = await publicStatus(await controller.status(), cachedEncode);
      } else if (endpoint === WEIXIN_ENDPOINTS.beginProvisioning) {
        const started = await controller.startProvisioning();
        if (signal?.aborted) {
          await controller.cancelProvisioning(started.attemptId);
          return cancelled();
        }
        value = await withEncodedQr(started, cachedEncode);
      } else if (endpoint === WEIXIN_ENDPOINTS.pollProvisioning) {
        const current = await controller.registrationStatus(payload.attemptId);
        if (!current) return badRequest('The provisioning attempt no longer exists.');
        value = await withEncodedQr(current, cachedEncode);
      } else if (endpoint === WEIXIN_ENDPOINTS.submitVerification) {
        value = await withEncodedQr(
          await controller.submitVerification(payload.attemptId, payload.verifyCode),
          cachedEncode,
        );
      } else if (endpoint === WEIXIN_ENDPOINTS.cancelProvisioning) {
        value = await controller.cancelProvisioning(payload.attemptId);
        if (!value) return badRequest('The provisioning attempt no longer exists.');
      } else if (endpoint === WEIXIN_ENDPOINTS.reconnectBot) {
        const snapshot = await controller.reconnectBot(payload.botId);
        if (signal?.aborted) return cancelled();
        let testMessage;
        if (payload.sendTest === true) {
          const connected = snapshot?.bots?.some(
            (bot) => bot?.botId === payload.botId && bot?.connected === true,
          );
          if (!connected || typeof controller.sendConnectionTest !== 'function') {
            testMessage = publicConnectionTestResult(
              connectionTestTargetUnavailable('微信机器人'),
            );
          } else {
            try {
              await controller.sendConnectionTest(payload.botId);
              testMessage = publicConnectionTestResult();
            } catch (error) {
              testMessage = publicConnectionTestResult(error);
            }
          }
        }
        value = await publicStatus({ ...snapshot, ...(testMessage ? { testMessage } : {}) }, cachedEncode);
      } else if (endpoint === WEIXIN_ENDPOINTS.setWorkspace) {
        if (typeof controller.updateWorkspace !== 'function') throw new Error('Workspace update is unavailable');
        value = await publicStatus(
          await controller.updateWorkspace(payload.botId, payload.workspace),
          cachedEncode,
        );
      } else if (endpoint === WEIXIN_ENDPOINTS.setAgentPreset) {
        if (typeof controller.updateAgentPreset !== 'function') throw new Error('Agent preset update is unavailable');
        value = await publicStatus(
          await controller.updateAgentPreset(payload.botId, payload.agentPreset),
          cachedEncode,
        );
      } else {
        value = await publicStatus(await controller.deleteBot(payload.botId), cachedEncode);
      }
      return signal?.aborted ? cancelled() : { ok: true, value };
    } catch (error) {
      const workspaceError = publicWorkspaceError(error);
      return signal?.aborted ? cancelled() : workspaceError
        ? { ok: false, error: workspaceError }
        : internalFailure();
    }
  };
}

// ---------------------------------------------------------------------------
// RPC channel transport
//
// DSH's `connection.rpc.handle(channel, ...)` mounts the route on the service's
// *owner* context. That owner is resolved through cordis' shadow rule to the
// context that provided Connection (`inject = ["credentials"]`), which has no
// `webServer`, so `owner.webServer.register` throws
// `cannot get property "webServer" without inject` and the channel never
// mounts (every request falls through to the webserver fallback → HTTP 405).
// Wrapping the call in `ctx.inject([...])` cannot fix that: the owner is not
// the reading context.
//
// So the channel is mounted here, on the plugin's own webServer-injected
// context, speaking the exact `client-connection` envelope
// (`POST <channel>/<endpoint>` with a `client-request` body in and a
// `server-response` body out) — the browser client needs no change.
// ---------------------------------------------------------------------------

const JSON_CONTENT_TYPE = 'application/json';
const MAX_RPC_BODY_BYTES = 1_000_000;

function sendJson(response, status, body) {
  const text = JSON.stringify(body);
  response.writeHead(status, {
    'content-type': `${JSON_CONTENT_TYPE}; charset=utf-8`,
    'content-length': Buffer.byteLength(text),
    'cache-control': 'no-store',
  });
  response.end(text);
}

function rpcFailure(rpcId, code, message, details = {}) {
  return {
    type: 'server-response',
    rpcId,
    result: { ok: false, error: { code, message, details } },
  };
}

/**
 * The browser transport rejects a failed envelope whose `error.details` is not
 * an object (`invalid server-response failure`), but most plugin branches omit
 * it. Normalize so the real failure reaches the settings page.
 */
function normalizeRpcResult(result) {
  if (!result || typeof result !== 'object' || Array.isArray(result)) {
    return { ok: true, value: result };
  }
  if (result.ok === false) {
    const error = result.error && typeof result.error === 'object' ? result.error : {};
    return {
      ok: false,
      error: {
        code: typeof error.code === 'string' ? error.code : 'weixin-operation-failed',
        message: typeof error.message === 'string' ? error.message : '微信操作失败，请稍后重试。',
        details: error.details && typeof error.details === 'object' && !Array.isArray(error.details)
          ? error.details
          : {},
      },
    };
  }
  return result.ok === true ? result : { ok: true, value: result };
}

function weixinEndpoint(pathname) {
  const prefix = `${WEIXIN_RPC_CHANNEL}/`;
  if (!pathname.startsWith(prefix)) return undefined;
  const endpoint = pathname.slice(prefix.length);
  if (!endpoint || endpoint.includes('/') || endpoint === '.' || endpoint === '..') return undefined;
  return endpoint;
}

async function readRequestBody(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_RPC_BODY_BYTES) throw new Error('request body is too large');
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString('utf8').trim();
  return text ? JSON.parse(text) : undefined;
}

function createWeixinChannelRoute(connection, handler) {
  return async (request, response) => {
    // Same boundary DSH applies to its own /api transport: trusted host plus
    // browser authentication, so LAN/domain access keeps working.
    const rejection = typeof connection.requestRejection === 'function'
      ? connection.requestRejection(request)
      : undefined;
    if (rejection !== undefined) {
      response.writeHead(rejection);
      response.end(rejection === 401 ? 'unauthorized' : 'forbidden');
      return;
    }

    const pathname = new URL(request.url ?? '/', 'http://localhost').pathname;
    const endpoint = weixinEndpoint(pathname);
    if (request.method !== 'POST' || endpoint === undefined) {
      response.writeHead(404);
      response.end('not found');
      return;
    }

    const contentType = String(request.headers['content-type'] ?? '')
      .split(';', 1)[0].trim().toLowerCase();
    if (contentType !== JSON_CONTENT_TYPE) {
      response.writeHead(415);
      response.end('content type must be application/json');
      return;
    }

    let message;
    try {
      message = await readRequestBody(request);
    } catch {
      response.writeHead(400);
      response.end('body is not JSON');
      return;
    }
    if (typeof message?.rpcId !== 'string' || !message.rpcId) {
      response.writeHead(400);
      response.end('body is not a client request');
      return;
    }
    if (message.type !== 'client-request' || message.method !== endpoint) {
      sendJson(response, 200, rpcFailure(
        message.rpcId,
        'gateway/bad-request',
        `method ${JSON.stringify(message.method)} does not match endpoint ${JSON.stringify(endpoint)}`,
      ));
      return;
    }

    try {
      const result = normalizeRpcResult(await handler(endpoint, message.payload));
      sendJson(response, 200, { type: 'server-response', rpcId: message.rpcId, result });
    } catch (error) {
      sendJson(response, 200, rpcFailure(
        message.rpcId,
        'weixin-operation-failed',
        error?.message ?? String(error),
      ));
    }
  };
}

export function installWeixinRpc(ctx, controller, options, authority) {
  // Validate the declared authority even though the effective gate is DSH's
  // trusted-host + browser-auth fence applied per request above.
  resolveRpcAuthority(authority);
  if (!ctx?.connection || typeof ctx.connection.requestRejection !== 'function') {
    throw new TypeError('DSH Host Connection service is required');
  }
  if (!ctx?.webServer || typeof ctx.webServer.register !== 'function') {
    throw new TypeError('DSH Host webServer service is required to mount the weixin RPC channel');
  }
  return ctx.effect(
    () => ctx.webServer.register({
      kind: 'prefix',
      path: WEIXIN_RPC_CHANNEL,
      handler: createWeixinChannelRoute(ctx.connection, createWeixinRpcHandler(controller, options)),
    }),
    `dsh-weixin: ${WEIXIN_RPC_CHANNEL} rpc channel`,
  );
}
