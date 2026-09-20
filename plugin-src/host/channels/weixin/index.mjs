import { createProductionController } from './production.mjs';
import { installWeixinRpc } from './rpc.mjs';

export const name = 'dsh-weixin-host';
export const inject = ['connection', 'credentials', 'webServer', 'typertGateway'];

export function apply(ctx, config = {}) {
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
