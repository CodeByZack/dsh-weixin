# @zackdk/dsh-weixin

DeepSeek Harness 的**微信通道独立插件**。基于 [`@xmanrui/dsh-im`](https://github.com/xmanrui/dsh-im) v2.1.0 fork，**只保留 Weixin 通道**，脱离上游更新节奏，独立维护。

## 与原插件的差异

- 只支持 **微信**（其他 9 个通道：企微 / 飞书 / 钉钉 / QQ / Slack / Discord / Telegram / WhatsApp / AI Office 全部移除）
- 上游新增功能 / bug 修复**不会自动同步**，需要手动 cherry-pick
- 上游协议变更需要自己跟

## 协议说明

- **走腾讯官方 iLink Bot 接口**（`https://ilinkai.weixin.qq.com/`，协议版本 `2.4.6`），**不是**逆向个人协议
- 扫码绑定拿到的 `bot_token` 保存在 DSH credentials 里，卸载后重扫即失效
- 只处理 **ownerUserId**（自己），其他人消息直接丢弃

## 安装

### 本地开发

```bash
cd /path/to/this/repo
npm install

# 用 file: 引用安装到 web profile
cd $DSH_HOME/profiles/web
npm install ../../profiles/home/dsh-weixin --save
# 或手改 package.json 的 dependencies + dsh.profile.bundles
```

### 装到 web profile

编辑 `$DSH_HOME/profiles/web/package.json`：

```json
{
  "dependencies": {
    "@zackdk/dsh-weixin": "file:../../profiles/home/dsh-weixin"
  },
  "dsh": {
    "profile": {
      "bundles": [
        "@deepseek-ai/dsh-base",
        "@deepseek-ai/dsh-web-app",
        "@zackdk/dsh-weixin"
        // 其他 bundles 照旧
      ]
    }
  }
}
```

然后重启 `dsh web`。

### 如果要从 @xmanrui/dsh-im 迁移

1. 先把旧的 `@xmanrui/dsh-im` 从 `dependencies` 和 `dsh.profile.bundles` 里删掉
2. 装新包，重启 `dsh web`
3. 现有的 bot 账号（token、state.json、config.json）在 `$DSH_HOME/integrations/dsh-weixin/` 里，两个插件**共用同一个存储位置**，理论上可以直接复用（相同 schema）
4. 如果启动报错，删掉 `state.json` 重扫一次码最省事

## 开发

```bash
# 检查所有 import 路径
node scripts/verify-imports.mjs

# 打包
npm pack

# 发 npm
npm publish
```

## 目录结构

```
.
├── cordis.patch.yml              ← DSH 插件注册声明（必须）
├── package.json
├── README.md
├── bin/
│   └── dsh-weixin.mjs            ← install / uninstall CLI（TODO）
├── plugin-src/                   ← 插件入口 & RPC 层
│   └── host/
│       ├── harness-command-executor.mjs
│       ├── harness-session-coordinator.mjs
│       ├── rpc-authority.mjs
│       └── channels/
│           ├── shared/
│           │   ├── agent-preset-rpc.mjs
│           │   └── workspace-rpc.mjs
│           └── weixin/
│               ├── index.mjs            ← 插件入口（export name / inject / apply）
│               ├── connection-supervisor.mjs
│               ├── production.mjs
│               └── rpc.mjs
└── src/
    └── channels/
        ├── shared/                   ← 17 个共享模块 + i18n
        │   ├── agent-preset.mjs
        │   ├── bot-workspace-store.mjs
        │   ├── compact-command.mjs
        │   ├── connection-test.mjs
        │   ├── control-command.mjs
        │   ├── harness-approval.mjs
        │   ├── harness-client.mjs      ← 1600 行核心
        │   ├── harness-question.mjs
        │   ├── harness-session-binding.mjs
        │   ├── i18n.mjs
        │   ├── i18n-en.mjs
        │   ├── i18n-en/                ← 14 个 i18n 分片
        │   ├── image-prompt.mjs
        │   ├── inbound-file.mjs
        │   ├── model-command.mjs
        │   ├── preset-command.mjs
        │   ├── session-binding-lock.mjs
        │   ├── workspace-command.mjs
        │   ├── workspace-session.mjs
        │   └── semantic/
        │       ├── artifact.mjs
        │       ├── artifact-delivery.mjs
        │       └── delivery.mjs
        └── weixin/                   ← 微信通道核心
            ├── config-store.mjs
            ├── state-store.mjs
            ├── harness-client.mjs
            ├── weixin-api.mjs          ← 腾讯 iLink Bot 官方接口封装
            ├── weixin-bridge.mjs       ← 消息 ↔ Harness 会话桥
            ├── weixin-controller.mjs   ← 扫码 / 账号生命周期
            └── weixin-runtime.mjs      ← 长轮询循环
```

## 关键改动 TODO

- [ ] **简化命令长度**（用户已提，未实施）：把 `/sessionlist` `/workspace` `/workspacelist` `/presetlist` 这些长命令改成短别名
- [ ] 推 GitHub 仓库

## 已完成的精简（本次 fork 内）

- ✅ **删掉 9 个非微信 i18n 翻译**（`src/channels/shared/i18n-en/`）：`feishu.mjs` `dingtalk.mjs` `wecom.mjs` `qq.mjs` `slack.mjs` `telegram.mjs` `discord.mjs` `whatsapp.mjs` `office.mjs`，共 -591 行
- ✅ **精简 `i18n-en.mjs`**：只保留 shared-a/b/c + weixin 四个合并源，-18 行
- ✅ **移除 `bot-workspace-store.mjs` 的无用导出**：`createBotScopedHarness`（无人调用）已删；`validateWorkspacePath` 改为内部函数（内部还在用）
- ✅ **未拷贝** `text-harness-bridge.mjs`（其他通道用，weixin 不用）

**净减少：613 行，9 个文件**（11432 → 10819 行，51 → 42 个 .mjs）

## 未来可能的精简（风险高，暂未动手）

- `harness-client.mjs`（1603 行）—— 21 个方法里 weixin 全都在用，没法安全砍
- `bot-workspace-store.mjs`（1056 行）—— 5 个导出全都在用
- `weixin-bridge.mjs`（904 行）—— 命令/交互处理核心，全在用

## License

MIT（继承自上游 @xmanrui/dsh-im）

上游原作者：[xmanrui](https://github.com/xmanrui)（[C3H3-AI](https://github.com/C3H3-AI)）
