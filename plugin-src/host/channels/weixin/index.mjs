import { createProductionController } from './production.mjs';
import { installWeixinRpc } from './rpc.mjs';
import { installOutboundArtifactTool } from '../../../../src/channels/shared/semantic/artifact.mjs';

export const name = 'dsh-weixin-host';
export const inject = ['connection', 'credentials', 'webServer', 'typertGateway'];

export function apply(ctx, config = {}) {
  // 文件回传工具（dsh_im_return_file）：注册全局工具与 system prompt 段落。
  // 上游把它装在多通道总入口 plugin-src/host/index.mjs 里，本 fork 没有那个入口，
  // 少了这段 outboundArtifactRegistry 就永远为空，微信侧收不到生成的文件。
  // 安装器自带能力检测，缺 tools/systemPrompt 时返回 false，不会中断启动。
  if (typeof ctx?.inject === 'function') {
    ctx.inject(['tools', 'systemPrompt'], (artifactCtx) => {
      installOutboundArtifactTool(artifactCtx);
    });
  } else {
    installOutboundArtifactTool(ctx);
  }

  // cordis 4 严格注入模型：服务属性访问必须在依赖注入完成后进行。
  // 用 ctx.inject 声明依赖并等 connection/credentials/webServer/typertGateway
  // 全部就绪后再初始化（与官方 api-gateway 的写法一致），否则启动期
  // 并行加载时 "cannot get property webServer without inject"。
  return ctx.inject(['connection', 'credentials', 'webServer', 'typertGateway'], async (readyCtx) => {
    if (config?.controller) {
      return installWeixinRpc(readyCtx, config.controller, config.rpcOptions, config.rpcAuthority);
    }

    const production = await createProductionController(readyCtx, config, config.internals);
    const disposeRpc = installWeixinRpc(
      readyCtx,
      production.controller,
      config.rpcOptions,
      config.rpcAuthority,
    );
    return async () => {
      await production.close();
      disposeRpc?.();
    };
  });
}

export function createWeixinHostPlugin(config) {
  return Object.freeze({ name, inject, apply: (ctx) => apply(ctx, config) });
}

export { createConnectionSupervisor, ConnectionSupervisor } from './connection-supervisor.mjs';
export { createProductionController } from './production.mjs';
export {
  WEIXIN_ENDPOINTS,
  WEIXIN_RPC_CHANNEL,
  WEIXIN_RPC_ENDPOINTS,
  createWeixinRpcHandler,
  installWeixinRpc,
} from './rpc.mjs';
export { WeixinController } from '../../../../src/channels/weixin/weixin-controller.mjs';
export { WeixinRuntime } from '../../../../src/channels/weixin/weixin-runtime.mjs';
