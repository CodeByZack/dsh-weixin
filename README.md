# @zackdk/dsh-weixin

DeepSeek Harness 的**微信通道插件**。把微信接成 Harness 的一个消息入口：在微信里发消息，和 web 端一样驱动会话、工作区、模型与 Agent Preset。

## 特性

- 走**腾讯官方 iLink Bot 接口**（协议版本 2.4.6），不是逆向个人协议
- 支持**文字、图片、文件、带识别结果的语音**输入
- **14 个会话命令**，微信里直接操作（见下）
- 消息**发送失败自动重试**：`ret=-2` / HTTP 5xx / 网络类错误最多重试 3 次，延迟 1.5s → 3s → 4.5s，每次换新 `client_id`；鉴权与会话失效类错误立即失败不重试
- **多客户端冲突处理**：同一问题已在其他端回答过时，微信侧只回一条提示，不重复回答
- 工具调用审批、提问回复等交互可在微信内完成
- host 侧收发 + client 侧渠道管理页，客户端 bundle 随包发布，安装侧**无需构建步骤**

## 安装

```bash
dsh plugin --profile web add @zackdk/dsh-weixin
```

包内声明了 `dsh.bundle.patch`，`dsh.profile.bundles` 会自动挂好，不需要手改 profile 文件。装完重启 `dsh web`。

## 开发

```bash
npm ci
npm run build:client
```

`lib/client.js` 不提交仓库，由 CI 从源码现场构建后打进 npm tarball（见 `.github/workflows/npm-publish.yml`）。本地直接跑插件前需要先 build 一次。

## 扫码绑定

1. 打开 DSH web 端的渠道设置页
2. 用微信扫码
3. `bot_token` 存在 DSH credentials 里；卸载后重扫即失效

## 支持的命令

| 命令 | 作用 |
| --- | --- |
| `/new` | 开启一个全新会话 |
| `/compact` | 压缩当前会话的较早上下文 |
| `/workspace <序号或绝对路径>` | 切换工作区 |
| `/workspacelist` | 按序号列出工作区绝对路径 |
| `/sessionlist [工作区序号或绝对路径]` | 列出会话 ID 和标题 |
| `/session <Session ID 或工作区序号>` | 将当前聊天绑定到指定会话 |
| `/models` | 按序号列出所有可用模型 |
| `/model [序号或完整模型 ID]` | 查看或切换当前会话模型 |
| `/presetlist` | 按序号列出可用 Agent Preset |
| `/preset [序号或完整 ID]` | 查看或设置当前机器人的 Agent Preset |
| `/preset id:<纯数字 ID>` | 选择纯数字 ID |
| `/preset --default` | 跟随 Host 默认 |
| `/stop` | 停止当前任务 |
| `/steer <补充指令>` | 纠偏当前任务 |
| `/status` | 检查连接状态 |
| `/help` | 显示帮助 |

命令**大小写不敏感**，也可以和其他文字混着发。切模型最省事的路径是先发 `/models` 拿序号，再发 `/model 2`。

## 协议说明

- 接口：`https://ilinkai.weixin.qq.com/`，协议版本 `2.4.6`
- 长轮询拉取消息
- 只处理 **ownerUserId**（本人）的消息，其他人的消息直接丢弃

## 卸载

从 `dsh.profile.bundles` 移除即可。`bot_token` 保留在 DSH credentials 里，重装后需要重新扫码。

## License

MIT — 见 [LICENSE](./LICENSE)
