window.__ModuleLoader__.load({
  id: "@zackdk/dsh-weixin",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugin-src/client/index.js
var index_exports = {};
__export(index_exports, {
  IMSettingsTab: () => IMSettingsTab,
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var React11 = __toESM(require("react"), 1);

// plugin-src/client/channel-logos.js
var React = __toESM(require("react"), 1);
var h = React.createElement;
function dimensions(size) {
  return size === void 0 ? {} : { width: size, height: size };
}
function WeixinLogoGlyph({ size } = {}) {
  return h("svg", {
    ...dimensions(size),
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    "data-im-channel-logo": "weixin"
  }, h("path", {
    fill: "currentColor",
    d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"
  }));
}

// plugin-src/client/channels/weixin/index.js
var React10 = __toESM(require("react"), 1);

// plugin-src/client/credential-binding.js
var React3 = __toESM(require("react"), 1);

// plugin-src/client/i18n.js
var React2 = __toESM(require("react"), 1);
var IM_LOCALE_NAMESPACE = "dsh-im";
var EN = Object.freeze({
  "$locale": "en",
  "IM\u673A\u5668\u4EBA": "IM bots",
  "IM\u673A\u5668\u4EBA\u8BBE\u7F6E": "IM bot settings",
  "IM \u6E20\u9053": "IM channels",
  "\u8BA9 DeepSeek Harness \u89E6\u624B\u53EF\u53CA": "DeepSeek Harness, always within reach",
  "AI Office": "AI Office",
  "\uFF08\u5B9E\u9A8C\u529F\u80FD\uFF09": "(Experimental)",
  "AI Office \u8BBE\u7F6E": "AI Office settings",
  "AI Office \u8BBE\u7F6E\u9875\u7F3A\u5C11 RPC \u8FDE\u63A5": "AI Office settings are missing an RPC connection",
  "\u6B63\u5728\u8BFB\u53D6 AI Office Connector\u2026": "Loading AI Office Connector\u2026",
  "\u672C\u673A\u4E3B\u52A8\u8FDE\u63A5\u516C\u7F51 Office\uFF1BHarness \u4E0D\u5F00\u653E\u7AEF\u53E3\u3002\u534F\u8BAE Hook \u56FA\u5B9A\u4E3A ": "This machine connects outward to the public Office; Harness exposes no port. Protocol hooks: ",
  "\u5C1A\u672A\u914D\u7F6E": "Not configured",
  "\u5DF2\u8FDE\u63A5 Office": "Connected to Office",
  "\u5DF2\u914D\u7F6E": "Configured",
  "\u7B49\u5F85\u91CD\u8FDE": "Waiting to reconnect",
  "\u51ED\u636E\u7F3A\u5931": "Credential missing",
  "\u6700\u8FD1\u5FC3\u8DF3": "Last heartbeat",
  "\u6700\u8FD1\u4E8B\u4EF6": "Last event",
  "\u91CD\u8FDE\u6B21\u6570": "Reconnects",
  "\u8FD0\u884C Job": "Running Jobs",
  "\u5B8C\u6210 Job": "Completed Jobs",
  "\u5C1A\u65E0": "None yet",
  "\u8BBE\u5907\u8FDE\u63A5": "Device connection",
  "Token \u53EA\u5199\u5165\u672C\u673A\u51ED\u636E\u5B58\u50A8": "Token is written only to the local credential store",
  "\u7C98\u8D34 Office \u4E00\u6B21\u6027\u51ED\u636E": "Paste the one-time Office credential",
  "\u5DF2\u5B89\u5168\u4FDD\u5B58\uFF1B\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8": "Stored securely; leave blank to keep it",
  "\u6700\u5927\u5E76\u53D1": "Max concurrency",
  "Heartbeat \u79D2\u6570": "Heartbeat seconds",
  "Workspace \u6620\u5C04": "Workspace mappings",
  "\u6BCF\u884C alias=/\u672C\u673A/\u7EDD\u5BF9\u8DEF\u5F84\uFF1BOffice \u53EA\u80FD\u770B\u5230 alias\u3002": "One alias=/local/absolute/path per line; Office sees only aliases.",
  "Instruction Preset \u6620\u5C04": "Instruction preset mappings",
  "\u6BCF\u884C alias=\u6307\u4EE4\uFF1B\u65B0\u589E preset \u4E0D\u9700\u8981\u6539 Office \u4EE3\u7801\u3002": "One alias=instruction per line; new presets require no Office code change.",
  "\u4FDD\u5B58\u5E76\u8FDE\u63A5": "Save and connect",
  "\u6D4B\u8BD5\u8FDE\u63A5": "Test connection",
  "\u6D4B\u8BD5\u4E2D\u2026": "Testing\u2026",
  "\u91CD\u65B0\u8FDE\u63A5": "Reconnect",
  "\u79FB\u9664\u8FDE\u63A5": "Remove connection",
  "\u8FDE\u63A5\u6D4B\u8BD5\u901A\u8FC7\u3002": "Connection test passed.",
  "\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002": "Configuration saved.",
  "\u534F\u8BAE Hook \u9884\u89C8": "Protocol hook preview",
  "\u7531 Base URL \u81EA\u52A8\u6D3E\u751F\uFF0C\u4E0D\u5355\u72EC\u586B\u5199": "Derived from Base URL; no separate input",
  "Base URL \u65E0\u6548": "Invalid Base URL",
  "Office Hook \u5C1A\u672A\u90E8\u7F72\u65F6\uFF0C\u914D\u7F6E\u4F1A\u5B89\u5168\u4FDD\u5B58\u5E76\u81EA\u52A8\u91CD\u8BD5\uFF1B\u51FA\u73B0 HTTP 404 \u4EE3\u8868\u534F\u8BAE\u7AEF\u70B9\u5F85\u4E0A\u7EBF\uFF0C\u4E0D\u4EE3\u8868 Harness \u6545\u969C\u3002": "Configuration is saved and retried while Office hooks are unavailable; HTTP 404 means the protocol endpoint is pending, not a Harness failure.",
  "Workspace \u6620\u5C04\u6BCF\u884C\u5FC5\u987B\u4F7F\u7528 alias=value": "Each workspace mapping must use alias=value",
  "Instruction Preset \u6620\u5C04\u6BCF\u884C\u5FC5\u987B\u4F7F\u7528 alias=value": "Each instruction preset mapping must use alias=value",
  "action-items=\u8F6C\u6362\u4E3A\u8D1F\u8D23\u4EBA\u3001\u622A\u6B62\u548C\u9A8C\u6536\u660E\u786E\u7684\u5DE5\u5355": "action-items=Turn this into accountable tasks with deadlines and acceptance criteria",
  "AI Office \u62D2\u7EDD\u4E86 Device Token\u3002": "AI Office rejected the Device Token.",
  "AI Office Connector Hook \u5C1A\u672A\u5C31\u7EEA\u3002": "AI Office Connector hooks are not available yet.",
  "AI Office Connector \u534F\u8BAE\u7248\u672C\u4E0D\u517C\u5BB9\u3002": "The AI Office Connector protocol is incompatible.",
  "\u672C\u673A\u6682\u65F6\u65E0\u6CD5\u8BBF\u95EE AI Office\u3002": "AI Office cannot currently be reached from this machine.",
  "AI Office \u8FDE\u63A5\u5DF2\u4E2D\u65AD\u3002": "The AI Office connection was interrupted.",
  "\u5E2E\u52A9\u4E0E\u53CD\u9988 \xB7 \u524D\u5F80 GitHub": "Help & feedback \xB7 Open GitHub",
  "\u5FAE\u4FE1": "WeChat",
  "\u98DE\u4E66": "Feishu",
  "\u9489\u9489": "DingTalk",
  "\u4F01\u4E1A\u5FAE\u4FE1": "WeCom",
  "\u5FAE\u4FE1\u673A\u5668\u4EBA": "WeChat bot",
  "\u98DE\u4E66\u673A\u5668\u4EBA": "Feishu bot",
  "\u9489\u9489\u673A\u5668\u4EBA": "DingTalk bot",
  "\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "WeCom bot",
  "QQ\u673A\u5668\u4EBA": "QQ bot",
  "WhatsApp\u673A\u5668\u4EBA": "WhatsApp bot",
  "WhatsApp\u8D26\u53F7": "WhatsApp account",
  "\u5FAE\u4FE1\u8BBE\u7F6E": "WeChat settings",
  "\u98DE\u4E66\u673A\u5668\u4EBA\u8BBE\u7F6E": "Feishu bot settings",
  "\u7FA4\u804A\u54CD\u5E94\u65B9\u5F0F": "Group response mode",
  "\u4EC5\u5728 @\u673A\u5668\u4EBA\u65F6\u54CD\u5E94\uFF08\u63A8\u8350\uFF09": "Only respond when @mentioned (recommended)",
  "\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F": "Respond to all group messages",
  "\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\uFF08\u9700\u98DE\u4E66\u654F\u611F\u6743\u9650\uFF09": "Respond to all group messages (requires a sensitive Feishu scope)",
  "\u91CD\u65B0\u6388\u6743": "Reauthorize",
  "\u53BB\u6388\u6743": "Authorize",
  "\u91CD\u65B0\u6388\u6743\u7FA4\u6D88\u606F\u6743\u9650": "Reauthorize group-message permission",
  "\u6388\u6743\u7FA4\u6D88\u606F\u6743\u9650": "Authorize group-message permission",
  "\u6B63\u5728\u51C6\u5907\u6388\u6743\u2026": "Preparing authorization\u2026",
  "\u6B63\u5728\u51C6\u5907\u2026": "Preparing\u2026",
  "\u79C1\u804A\u59CB\u7EC8\u54CD\u5E94\uFF1B\u7FA4\u804A\u4EC5\u5904\u7406\u660E\u786E @\u5F53\u524D\u673A\u5668\u4EBA\u7684\u6D88\u606F\u3002\u7FA4\u6D88\u606F\u6743\u9650\u5DF2\u5F00\u901A\uFF0C\u518D\u6B21\u5207\u6362\u65E0\u9700\u6388\u6743\u3002": "Direct messages always work; group chats require an explicit @mention of this bot. The group-message permission is already granted, so switching again needs no authorization.",
  "\u79C1\u804A\u59CB\u7EC8\u54CD\u5E94\uFF1B\u7FA4\u804A\u4EC5\u5904\u7406\u660E\u786E @\u5F53\u524D\u673A\u5668\u4EBA\u7684\u6D88\u606F\u3002\u9009\u62E9\u5168\u90E8\u6D88\u606F\u540E\u4F1A\u6253\u5F00\u98DE\u4E66\u5B98\u65B9\u6388\u6743\u6D41\u7A0B\u3002": "Direct messages always work; group chats require an explicit @mention of this bot. Selecting all messages opens the official Feishu authorization flow.",
  "\u5DF2\u5F00\u901A\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF08im:message.group_msg\uFF09\uFF1B\u673A\u5668\u4EBA\u4F1A\u5904\u7406\u7FA4\u804A\u4E2D\u7684\u6240\u6709\u53EF\u89C1\u6D88\u606F\u3002": "The \u201CRead all messages in associated group chat\u201D scope (im:message.group_msg) is granted; the bot processes every visible group message.",
  "\u5C1A\u672A\u786E\u8BA4\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF0C\u8BF7\u5B8C\u6210\u98DE\u4E66\u6388\u6743\u3002": "The \u201CRead all messages in associated group chat\u201D scope has not been confirmed. Complete Feishu authorization.",
  "\u79C1\u804A\u59CB\u7EC8\u54CD\u5E94\uFF1B\u7FA4\u804A\u4EC5\u5904\u7406\u660E\u786E @\u5F53\u524D\u673A\u5668\u4EBA\u7684\u6D88\u606F\u3002": "Direct messages always work; group chats require an explicit @mention of this bot.",
  "\u9700\u5728\u98DE\u4E66\u4E3A\u8BE5\u673A\u5668\u4EBA\u5F00\u901A\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF08im:message.group_msg\uFF09\uFF1B\u5F00\u901A\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u5904\u7406\u7FA4\u804A\u4E2D\u7684\u6240\u6709\u53EF\u89C1\u6D88\u606F\u3002": "Grant this bot the \u201CRead all messages in associated group chat\u201D Feishu scope (im:message.group_msg); once granted, it will process every visible group message.",
  "\u7FA4\u804A\u54CD\u5E94\u65B9\u5F0F\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not update the group response mode. Try again.",
  "\u7FA4\u6D88\u606F\u6743\u9650\u6388\u6743\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not authorize group-message permission. Try again.",
  "\u9489\u9489\u8BBE\u7F6E": "DingTalk settings",
  "\u4F01\u4E1A\u5FAE\u4FE1\u8BBE\u7F6E": "WeCom settings",
  "\u626B\u7801\u63A5\u5165\u673A\u5668\u4EBA": "Scan QR code",
  "\u6B63\u5728\u63A5\u5165": "Connecting",
  "\u624B\u52A8\u63A5\u5165": "Manual setup",
  "\u6536\u8D77\u51ED\u636E": "Hide credentials",
  "\u6536\u8D77\u63A5\u5165": "Hide setup",
  "\u63A5\u5165\u673A\u5668\u4EBA": "Connect bot",
  "\u5F00\u59CB\u63A5\u5165": "Start setup",
  "\u5728\u7EBF": "online",
  "\u8FD0\u884C\u6B63\u5E38": "Connected",
  "\u6B63\u5728\u8FDE\u63A5": "Connecting",
  "\u6B63\u5728\u8FDE\u63A5\u2026": "Connecting\u2026",
  "\u8FDE\u63A5\u672A\u5C31\u7EEA": "Not connected",
  "\u8FDE\u63A5\u4E2D": "Connecting",
  "\u8FDE\u63A5\u4E2D\u65AD": "Disconnected",
  "\u9700\u8981\u5904\u7406": "Needs attention",
  "\u72B6\u6001\u672A\u77E5": "Unknown status",
  "\u79BB\u7EBF": "Offline",
  "\u5DF2\u65AD\u5F00": "Disconnected",
  "\u6D88\u606F\u901A\u9053": "Message channel",
  "\u67E5\u770B\u6D88\u606F\u901A\u9053\u8BF4\u660E": "View message channel details",
  "\u6700\u8FD1\u68C0\u67E5": "Last checked",
  "\u5F53\u524D\u5DE5\u4F5C\u533A": "Current workspace",
  "\u9009\u62E9\u76EE\u5F55": "Choose folder",
  "\u9009\u62E9\u673A\u5668\u4EBA\u5DE5\u4F5C\u533A\u76EE\u5F55": "Select bot workspace folder",
  "\u5F53\u524D\u76EE\u5F55": "Current folder",
  "\u4E3B\u76EE\u5F55": "Home",
  "\u6B63\u5728\u51C6\u5907\u76EE\u5F55\u9009\u62E9\u5668\u2026": "Preparing folder picker\u2026",
  "\u6B63\u5728\u8BFB\u53D6\u76EE\u5F55\u2026": "Loading folders\u2026",
  "\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u6CA1\u6709\u5B50\u6587\u4EF6\u5939\u3002": "This folder has no subfolders.",
  "\u6B64\u76EE\u5F55\u7684\u5B50\u6587\u4EF6\u5939\u8FC7\u591A\uFF0C\u4EC5\u663E\u793A\u524D\u4E00\u90E8\u5206\u3002": "This folder has too many subfolders; only the first group is shown.",
  "\u65E0\u6CD5\u8BFB\u53D6\u76EE\u5F55\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not load the folder. Try again.",
  "\u91CD\u8BD5": "Retry",
  "\u663E\u793A\u9690\u85CF\u6587\u4EF6\u5939": "Show hidden folders",
  "\u5207\u6362\u540E\u4F1A\u6E05\u9664\u8FD9\u4E2A\u673A\u5668\u4EBA\u7684\u65E7\u4F1A\u8BDD\u6620\u5C04\u3002": "Switching clears this bot\u2019s previous session mappings.",
  "\u5207\u6362\u4E2D\u2026": "Switching\u2026",
  "\u9009\u62E9\u6B64\u76EE\u5F55": "Select this folder",
  "\u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84": "Absolute workspace path",
  "/\u7EDD\u5BF9\u8DEF\u5F84/\u5230/\u5DE5\u4F5C\u533A": "/absolute/path/to/workspace",
  "\u4FEE\u6539": "Change",
  "\u4FDD\u5B58": "Save",
  "\u4FDD\u5B58\u4E2D\u2026": "Saving\u2026",
  "\u672A\u8BBE\u7F6E": "Not set",
  "\u5DE5\u4F5C\u533A\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not update the workspace. Try again.",
  "\u8BF7\u8F93\u5165\u5DE5\u4F5C\u533A\u7EDD\u5BF9\u8DEF\u5F84\u3002": "Enter an absolute workspace path.",
  "\u5DE5\u4F5C\u533A\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002": "The workspace must be an absolute path.",
  "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u4E0D\u5B58\u5728\u3002": "The workspace path does not exist.",
  "\u5DE5\u4F5C\u533A\u8DEF\u5F84\u5FC5\u987B\u6307\u5411\u4E00\u4E2A\u76EE\u5F55\u3002": "The workspace path must point to a directory.",
  "\u627E\u4E0D\u5230\u8981\u4FEE\u6539\u7684\u673A\u5668\u4EBA\u3002": "The bot could not be found.",
  "Agent Preset": "Agent Preset",
  "\u67E5\u770B Agent Preset \u8BF4\u660E": "View Agent Preset help",
  "\u8DDF\u968F Host \u9ED8\u8BA4": "Follow the Host default",
  "\uFF08\u5DF2\u4E0D\u53EF\u7528\uFF09": " (unavailable)",
  "\u53EA\u5F71\u54CD\u65B0\u5EFA\u4F1A\u8BDD\uFF1B\u82E5\u5F53\u524D\u804A\u5929\u5DF2\u6709\u4F1A\u8BDD\uFF0C\u5148\u53D1\u9001 /new\uFF0C\u518D\u53D1\u9001\u666E\u901A\u6D88\u606F\u751F\u6548\u3002": "This affects only new sessions. If the current chat already has a session, send /new, then send a regular message to apply it.",
  "\u5F53\u524D Agent Preset \u5DF2\u4E0D\u53EF\u7528\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6 Preset \u6216\u8DDF\u968F Host \u9ED8\u8BA4\u3002": "The current Agent Preset is unavailable. Choose another preset or follow the Host default.",
  "Agent Preset \u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not update the Agent Preset. Try again.",
  "\u8BF7\u9009\u62E9 Agent Preset\u3002": "Choose an Agent Preset.",
  "Agent Preset \u65E0\u6548\u3002": "The Agent Preset is invalid.",
  "Agent Preset \u4E0D\u5B58\u5728\u6216\u4E0D\u53EF\u7528\u3002": "The Agent Preset does not exist or is unavailable.",
  "\u5C1A\u672A\u68C0\u67E5": "Not checked yet",
  "\u521A\u521A": "Just now",
  "\u68C0\u67E5\u8FDE\u63A5": "Check connection",
  "\u68C0\u67E5\u4E2D\u2026": "Checking\u2026",
  "\u8FDE\u63A5\u68C0\u67E5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002": "Connection check failed. Try again later.",
  "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230\u5BF9\u5E94\u673A\u5668\u4EBA\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002": "Test message sent. Check the matching bot conversation.",
  "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002\u673A\u5668\u4EBA\u5C1A\u672A\u6536\u5230\u53EF\u7528\u4E8E\u6D4B\u8BD5\u7684\u79C1\u804A\u6D88\u606F\u3002": "Connection check completed. The bot has not received a direct message it can use for testing.",
  "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002": "Connection check completed, but the test message could not be sent.",
  "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230\u98DE\u4E66\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002": "Test message sent. Check the Feishu conversation.",
  "\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\uFF0C\u8BF7\u5230 WhatsApp \u81EA\u804A\u4F1A\u8BDD\u4E2D\u786E\u8BA4\u3002": "Test message sent. Check the WhatsApp self-chat.",
  "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u7684 WhatsApp \u81EA\u804A\u76EE\u6807\u3002": "Connection check completed, but no WhatsApp self-chat target is available.",
  "\u9489\u9489\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002": "DingTalk connection check completed and the test message was sent.",
  "\u9489\u9489\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002": "DingTalk connection check completed, but the test message could not be sent.",
  "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002": "WeChat connection check completed and the test message was sent.",
  "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002": "WeChat connection check completed, but the test message could not be sent.",
  "\u4F01\u4E1A\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002": "WeCom connection check completed and the test message was sent.",
  "\u4F01\u4E1A\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002": "WeCom connection check completed, but the test message could not be sent.",
  "\u91CD\u8BD5\u8FDE\u63A5": "Reconnect",
  "\u91CD\u8BD5\u4E2D\u2026": "Retrying\u2026",
  "\u79FB\u9664\u63A5\u5165": "Remove connection",
  "\u786E\u8BA4\u79FB\u9664\u63A5\u5165": "Remove connection",
  "\u786E\u8BA4\u79FB\u9664": "Remove",
  "\u6B63\u5728\u79FB\u9664\u2026": "Removing\u2026",
  "\u4FDD\u7559\u673A\u5668\u4EBA": "Keep bot",
  "\u4FDD\u7559\u8D26\u53F7": "Keep account",
  "\u53D6\u6D88": "Cancel",
  "\u5173\u95ED": "Close",
  "\u7ACB\u5373\u91CD\u8BD5": "Retry now",
  "\u91CD\u65B0\u8BFB\u53D6": "Reload",
  "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801": "Generate a new QR code",
  "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801\u540E\u7EE7\u7EED": "Generate a new QR code",
  "\u5237\u65B0\u4E8C\u7EF4\u7801": "Refresh QR code",
  "\u5237\u65B0\u4E2D\u2026": "Refreshing\u2026",
  "\u6362\u4E00\u4E2A\u4E8C\u7EF4\u7801": "Get another QR code",
  "\u7EE7\u7EED\u8FDE\u63A5": "Continue connecting",
  "\u7ED1\u5B9A\u5E76\u8FDE\u63A5": "Connect",
  "\u6B63\u5728\u7ED1\u5B9A\u2026": "Connecting\u2026",
  "\u9A8C\u8BC1\u5E76\u8FDE\u63A5": "Verify and connect",
  "\u6B63\u5728\u9A8C\u8BC1\u5E76\u8FDE\u63A5\u2026": "Verifying and connecting\u2026",
  "\u6B63\u5728\u9A8C\u8BC1\u2026": "Verifying\u2026",
  "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5": "The operation failed. Try again later.",
  "\u8BF7\u7A0D\u540E\u91CD\u8BD5": "Try again later.",
  "\u5F53\u524D\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u95F4": "QR code expires in",
  "\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u95F4": "QR code expires in",
  "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F": "QR code expired",
  "\u4E8C\u7EF4\u7801\u5DF2\u5931\u6548": "QR code expired",
  "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\n\u8BF7\u91CD\u65B0\u751F\u6210": "QR code expired\nGenerate a new one",
  "\u4E8C\u7EF4\u7801\u56FE\u7247\u6B63\u5728\u751F\u6210\u2026": "Generating QR code\u2026",
  "\u4E8C\u7EF4\u7801\u6B63\u5728\u751F\u6210\u2026": "Generating QR code\u2026",
  "\u4E8C\u7EF4\u7801\u6B63\u5728\u81EA\u52A8\u5237\u65B0\u2026": "Refreshing QR code\u2026",
  "\u4E8C\u7EF4\u7801\u672A\u5C31\u7EEA\uFF0C\u8BF7\u6253\u5F00\u6388\u6743\u94FE\u63A5": "The QR code is not ready. Open the authorization link.",
  "\u4E8C\u7EF4\u7801\u56FE\u7247\u672A\u5C31\u7EEA\uFF0C\u8BF7\u4F7F\u7528\u5907\u7528\u94FE\u63A5\u3002": "The QR code is not ready. Use the alternate link.",
  "\u4E8C\u7EF4\u7801\u56FE\u7247\u672A\u5C31\u7EEA\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u3002": "The QR code is not ready. Generate a new one.",
  "\u7B49\u5F85\u5237\u65B0": "Waiting to refresh",
  "\u6B63\u5728\u5237\u65B0\u4E8C\u7EF4\u7801": "Refreshing QR code",
  "\u6253\u5F00\u5907\u7528\u94FE\u63A5": "Open alternate link",
  "\u751F\u6210\u4E8C\u7EF4\u7801": "Generate QR code",
  "\u751F\u6210\u5FAE\u4FE1\u4E8C\u7EF4\u7801": "Generate WeChat QR code",
  "\u751F\u6210\u98DE\u4E66\u4E8C\u7EF4\u7801": "Generate Feishu QR code",
  "\u751F\u6210\u9489\u9489\u4E8C\u7EF4\u7801": "Generate DingTalk QR code",
  "\u751F\u6210\u4F01\u4E1A\u5FAE\u4FE1\u4E8C\u7EF4\u7801": "Generate WeCom QR code",
  "\u751F\u6210 QQ \u4E8C\u7EF4\u7801": "Generate QQ QR code",
  "\u6B63\u5728\u751F\u6210\u4E8C\u7EF4\u7801\u2026": "Generating QR code\u2026",
  "\u6B63\u5728\u51C6\u5907\u6388\u6743\u4E8C\u7EF4\u7801": "Preparing authorization QR code",
  "\u6B63\u5728\u51C6\u5907\u6743\u9650\u6388\u6743\u4E8C\u7EF4\u7801": "Preparing permission authorization QR code",
  "\u6B63\u5728\u51C6\u5907\u5FAE\u4FE1\u4E8C\u7EF4\u7801": "Preparing WeChat QR code",
  "\u6B63\u5728\u6DFB\u52A0\u65B0\u673A\u5668\u4EBA": "Adding a new bot",
  "\u6B63\u5728\u7533\u8BF7\u9489\u9489\u6388\u6743\u4E8C\u7EF4\u7801\u2026": "Requesting DingTalk authorization QR code\u2026",
  "\u6B63\u5728\u7533\u8BF7\u4F01\u4E1A\u5FAE\u4FE1\u4E8C\u7EF4\u7801\u2026": "Requesting WeCom QR code\u2026",
  "\u6B63\u5728\u7533\u8BF7 QQ \u4E8C\u7EF4\u7801\u2026": "Requesting QQ QR code\u2026",
  "\u6B63\u5728\u751F\u6210 WhatsApp \u4E8C\u7EF4\u7801": "Generating WhatsApp QR code",
  "\u626B\u7801\uFF0C\u521B\u5EFA\u7B2C\u4E00\u4E2A\u98DE\u4E66\u5165\u53E3": "Scan to create your first Feishu bot",
  "\u626B\u7801\u53EA\u4F1A\u65B0\u589E\u4E00\u4E2A\u673A\u5668\u4EBA\uFF0C\u5DF2\u63A5\u5165\u7684\u673A\u5668\u4EBA\u4F1A\u7EE7\u7EED\u6B63\u5E38\u6536\u53D1\u6D88\u606F\u3002": "Scanning adds one bot. Existing bots will continue to send and receive messages.",
  "\u65E0\u9700\u624B\u52A8\u586B\u5199 App ID\u3002\u4EE5\u540E\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u6DFB\u52A0\u673A\u5668\u4EBA\uFF0C\u5206\u522B\u670D\u52A1\u4E0D\u540C\u56E2\u961F\u6216\u98DE\u4E66\u79DF\u6237\u3002": "No App ID is required. You can add more bots later for different teams or Feishu tenants.",
  "\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u521B\u5EFA\u673A\u5668\u4EBA": "Scan with Feishu to create a bot",
  "\u5237\u65B0\u4E8C\u7EF4\u7801\u540E\u7EE7\u7EED": "Refresh the QR code to continue",
  "\u6253\u5F00\u98DE\u4E66\u79FB\u52A8\u7AEF\uFF0C\u4F7F\u7528\u626B\u4E00\u626B\u8BFB\u53D6\u4E8C\u7EF4\u7801": "Open Feishu on your phone and scan the QR code",
  "\u6838\u5BF9\u5E94\u7528\u540D\u79F0\u4E0E\u6743\u9650\u8303\u56F4\uFF0C\u5E76\u786E\u8BA4\u521B\u5EFA": "Review the app name and permissions, then confirm",
  "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u65B0\u673A\u5668\u4EBA\u7684\u957F\u8FDE\u63A5\u5C31\u7EEA": "Keep this page open until the bot connection is ready",
  "\u5728\u98DE\u4E66\u4E2D\u6253\u5F00": "Open in Feishu",
  "\u53D6\u6D88\u6DFB\u52A0": "Cancel",
  "\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u4FEE\u590D\u5361\u7247\u6309\u94AE": "Scan with Feishu to repair card buttons",
  "\u4F7F\u7528\u98DE\u4E66\u786E\u8BA4\u7FA4\u6D88\u606F\u6743\u9650": "Confirm group-message permission with Feishu",
  "\u626B\u7801\u4F1A\u66F4\u65B0\u73B0\u6709\u98DE\u4E66\u5E94\u7528\uFF0C\u53EA\u589E\u91CF\u5F00\u901A\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650\uFF1B\u4E0D\u4F1A\u521B\u5EFA\u65B0\u5E94\u7528\u3002\u786E\u8BA4\u540E\u4F1A\u81EA\u52A8\u542F\u7528\u201C\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\u201D\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u53D7\u5F71\u54CD\u3002": "Scanning updates the existing Feishu app with only the \u201CRead all messages in associated group chat\u201D scope. It does not create a new app. After confirmation, \u201CRespond to all group messages\u201D is enabled automatically; other bots are unaffected.",
  "\u6838\u5BF9\u73B0\u6709\u5E94\u7528\uFF0C\u5E76\u786E\u8BA4\u201C\u83B7\u53D6\u7FA4\u7EC4\u4E2D\u6240\u6709\u6D88\u606F\u201D\u6743\u9650": "Review the existing app and confirm the \u201CRead all messages in associated group chat\u201D permission",
  "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u6743\u9650\u751F\u6548\u5E76\u81EA\u52A8\u5207\u6362\u54CD\u5E94\u65B9\u5F0F": "Keep this page open while the permission takes effect and the response mode switches automatically",
  "\u53D6\u6D88\u6388\u6743": "Cancel authorization",
  "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u542F\u7528\u5168\u90E8\u6D88\u606F\u6A21\u5F0F": "Confirmed. Enabling all-message mode",
  "\u6743\u9650\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u4FDD\u5B58\u8BBE\u7F6E\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002": "The permission update was submitted. Saving the setting and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "\u6743\u9650\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u542F\u7528\u5168\u90E8\u6D88\u606F\u6A21\u5F0F\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002": "The permission update was submitted. Enabling all-message mode and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "\u6B63\u5728\u4E3A\u73B0\u6709\u98DE\u4E66\u5E94\u7528\u7533\u8BF7\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002": "Requesting a group-message permission QR code for the existing Feishu app\u2026",
  "\u7FA4\u6D88\u606F\u6743\u9650\u6CA1\u6709\u5F00\u901A\u5B8C\u6210": "Group-message permission was not granted",
  "\u626B\u7801\u4F1A\u66F4\u65B0\u73B0\u6709\u98DE\u4E66\u5E94\u7528\uFF0C\u53EA\u589E\u91CF\u8865\u5145\u5361\u7247\u6309\u94AE\u56DE\u8C03\uFF1B\u4E0D\u4F1A\u521B\u5EFA\u65B0\u5E94\u7528\u3002\u786E\u8BA4\u540E\u6B64\u673A\u5668\u4EBA\u4F1A\u77ED\u6682\u91CD\u8FDE\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u53D7\u5F71\u54CD\u3002": "Scanning updates the existing Feishu app with only the card-button callback. It does not create a new app. This bot reconnects briefly after confirmation; other bots are not affected.",
  "\u6838\u5BF9\u73B0\u6709\u5E94\u7528\u540D\u79F0\uFF0C\u5E76\u786E\u8BA4\u53EA\u65B0\u589E\u5361\u7247\u56DE\u8C03": "Review the existing app name and confirm that only the card callback is added",
  "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u5361\u7247\u6309\u94AE\u4FEE\u590D\u5B8C\u6210": "Keep this page open until card-button repair finishes",
  "\u53D6\u6D88\u4FEE\u590D": "Cancel repair",
  "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u5B8C\u6210\u5361\u7247\u6309\u94AE\u4FEE\u590D": "Confirmed. Finishing card-button repair",
  "\u6B63\u5728\u51C6\u5907\u4FEE\u590D\u4E8C\u7EF4\u7801": "Preparing the repair QR code",
  "\u914D\u7F6E\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u9A8C\u8BC1\u5361\u7247\u6309\u94AE\u56DE\u8C03\u5E76\u91CD\u8FDE\u6B64\u673A\u5668\u4EBA\uFF1B\u6B64\u9636\u6BB5\u65E0\u6CD5\u53D6\u6D88\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002": "The update was submitted. Verifying the card callback and reconnecting this bot. This stage cannot be cancelled; other bots will not be interrupted.",
  "\u6B63\u5728\u4E3A\u73B0\u6709\u98DE\u4E66\u5E94\u7528\u7533\u8BF7\u4E00\u6B21\u6027\u66F4\u65B0\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002": "Requesting a one-time update QR code for the existing Feishu app\u2026",
  "\u5361\u7247\u6309\u94AE\u6CA1\u6709\u4FEE\u590D\u5B8C\u6210": "Card-button repair did not finish",
  "\u4FEE\u590D\u5361\u7247\u6309\u94AE": "Repair card buttons",
  "\u7B49\u5F85\u626B\u7801\u2026": "Waiting for scan\u2026",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u5361\u7247\u4FEE\u590D\u4E8C\u7EF4\u7801": "Feishu returned a repair QR code for a different bot",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801": "Feishu returned a group-message permission QR code for a different bot",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u4FEE\u590D\u4FE1\u606F\u7F3A\u5C11 botId": "Feishu repair status is missing the bot ID",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u5E94\u7528\u66F4\u65B0\u4FE1\u606F\u7F3A\u5C11 botId": "Feishu app-update status is missing the bot ID",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u4E0D\u5339\u914D\u7684\u6CE8\u518C\u8FDB\u5EA6": "Feishu returned registration progress for a different operation",
  "\u6B64\u673A\u5668\u4EBA": "this bot",
  "\u7528\u4E8E\u4E3A${botName}\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\u7684\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801": "One-time QR code for granting group-message permission to ${botName}",
  "\u6B63\u5728\u4E3A\u300C${botName}\u300D\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650": "Granting group-message permission to \u201C${botName}\u201D",
  '${botName ?? "\u673A\u5668\u4EBA"}\u7684\u4FEE\u590D\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u3002': 'Repair QR code generated for ${botName ?? "bot"}. Scan it with Feishu.',
  '${botName ?? "\u673A\u5668\u4EBA"}\u7684\u7FA4\u6D88\u606F\u6743\u9650\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u786E\u8BA4\u3002': 'Group-message permission QR code generated for ${botName ?? "bot"}. Confirm it with Feishu.',
  "${targetBotName}\u5DF2\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\uFF0C\u5E76\u542F\u7528\u201C\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\u201D\u3002": "${targetBotName} now has group-message permission and \u201CRespond to all group messages\u201D is enabled.",
  "${targetBot.bot.name}\u5DF2\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\uFF0C\u5E76\u542F\u7528\u201C\u54CD\u5E94\u6240\u6709\u7FA4\u6D88\u606F\u201D\u3002": "${targetBot.bot.name} now has group-message permission and \u201CRespond to all group messages\u201D is enabled.",
  "${targetBot.bot.name}\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5728\u98DE\u4E66\u4E2D\u5F00\u59CB\u804A\u5929\u3002": "${targetBot.bot.name} is connected and ready to chat in Feishu.",
  "\u5DF2\u53D6\u6D88\u5361\u7247\u6309\u94AE\u4FEE\u590D\u3002": "Card-button repair was cancelled.",
  "\u5DF2\u53D6\u6D88\u7FA4\u6D88\u606F\u6743\u9650\u6388\u6743\u3002": "Group-message permission authorization was cancelled.",
  "\u5361\u7247\u6309\u94AE\u5DF2\u66F4\u65B0\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u673A\u5668\u4EBA\u8FDE\u63A5\u72B6\u6001": "The card callback was updated, but the bot connection could not be confirmed yet",
  "\u7FA4\u6D88\u606F\u6743\u9650\u5DF2\u66F4\u65B0\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u673A\u5668\u4EBA\u8FDE\u63A5\u72B6\u6001": "The group-message permission was updated, but the bot connection could not be confirmed yet",
  "\u98DE\u4E66\u5361\u7247\u6309\u94AE\u4FEE\u590D\u5931\u8D25": "Could not repair the Feishu card buttons",
  "\u98DE\u4E66\u7FA4\u6D88\u606F\u6743\u9650\u5F00\u901A\u5931\u8D25": "Could not grant the Feishu group-message permission",
  "\u8BF7\u5148\u5B8C\u6210\u5F53\u524D\u98DE\u4E66\u6388\u6743\u64CD\u4F5C\uFF0C\u518D\u5F00\u901A\u7FA4\u6D88\u606F\u6743\u9650\u3002": "Finish the current Feishu authorization before granting group-message permission.",
  "\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u8FDE\u63A5\u65B0\u673A\u5668\u4EBA": "Confirmed. Connecting the new bot",
  "\u6B63\u5728\u5B89\u5168\u4FDD\u5B58\u51ED\u636E\u5E76\u68C0\u67E5\u65B0\u673A\u5668\u4EBA\u7684\u6D88\u606F\u901A\u9053\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E0D\u4F1A\u4E2D\u65AD\u3002": "Saving credentials and checking the new bot connection. Existing bots will not be interrupted.",
  "\u6B63\u5728\u5411\u98DE\u4E66\u7533\u8BF7\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u5019\u3002": "Requesting a one-time authorization QR code from Feishu\u2026",
  "\u65B0\u673A\u5668\u4EBA\u6CA1\u6709\u6DFB\u52A0\u5B8C\u6210": "The new bot was not added",
  "\u65B0\u98DE\u4E66\u673A\u5668\u4EBA\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5F00\u59CB\u804A\u5929\u3002": "The new Feishu bot is connected and ready to chat.",
  "\u98DE\u4E66\u5E94\u7528\u521B\u5EFA\u5931\u8D25": "Could not create the Feishu app",
  "\u673A\u5668\u4EBA\u5DF2\u7ECF\u521B\u5EFA\uFF0C\u4F46\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u8FDE\u63A5\u72B6\u6001": "The bot was created, but its connection could not be confirmed yet",
  "\u673A\u5668\u4EBA\u4ECD\u672A\u8FDE\u63A5": "The bot is still offline",
  "\u673A\u5668\u4EBA\u5C1A\u672A\u8FDE\u63A5": "The bot is not connected yet",
  "\u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38": "Persistent connection is healthy",
  "\u957F\u8FDE\u63A5": "Persistent connection",
  "\u5E94\u7528\u6807\u8BC6\u5DF2\u5B89\u5168\u4FDD\u5B58": "App identifier stored securely",
  "\u673A\u5668\u4EBA\u6807\u8BC6\u5DF2\u5B89\u5168\u4FDD\u5B58": "Bot identifier stored securely",
  "\u5DF2\u5B89\u5168\u4FDD\u5B58": "Stored securely",
  "\u5DF2\u63A5\u5165\u7684\u5FAE\u4FE1\u8D26\u53F7": "Connected WeChat accounts",
  "\u5DF2\u63A5\u5165\u7684\u673A\u5668\u4EBA": "Connected bots",
  "\u5DF2\u63A5\u5165\u7684\u9489\u9489\u673A\u5668\u4EBA": "Connected DingTalk bots",
  "\u5DF2\u7ED1\u5B9A\u7684\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "Connected WeCom bots",
  "\u5DF2\u7ED1\u5B9A\u7684 QQ \u673A\u5668\u4EBA": "Connected QQ bots",
  "\u5DF2\u63A5\u5165\u7684 WhatsApp \u673A\u5668\u4EBA": "Connected WhatsApp accounts",
  "\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801": "Scan with WeChat on your phone",
  "\u626B\u4E00\u6B21\u7801\uFF0C\u5C31\u80FD\u5728\u5FAE\u4FE1\u91CC\u4F7F\u7528 Harness": "Scan once to use Harness in WeChat",
  "\u6253\u5F00\u624B\u673A\u5FAE\u4FE1\u5E76\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801": "Open WeChat on your phone and scan the QR code",
  "\u5728\u5FAE\u4FE1\u4E2D\u786E\u8BA4\u8FDE\u63A5\u8BE5\u673A\u5668\u4EBA": "Confirm the bot connection in WeChat",
  "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u673A\u5668\u4EBA\u81EA\u52A8\u8FDE\u63A5": "Keep this page open while the bot connects",
  "\u7B49\u5F85\u5FAE\u4FE1\u626B\u7801": "Waiting for WeChat scan",
  "\u9700\u8981\u914D\u5BF9\u7801": "Pairing code required",
  "\u8F93\u5165\u624B\u673A\u5FAE\u4FE1\u663E\u793A\u7684\u6570\u5B57": "Enter the number shown in WeChat",
  "\u5FAE\u4FE1\u914D\u5BF9\u7801": "WeChat pairing code",
  "\u5DF2\u626B\u7801\uFF0C\u8BF7\u5728\u624B\u673A\u4E0A\u786E\u8BA4": "Scanned. Confirm on your phone",
  "\u914D\u5BF9\u7801\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u7B49\u5F85\u5FAE\u4FE1\u786E\u8BA4\u3002": "Pairing code submitted. Waiting for WeChat confirmation.",
  "\u8FD9\u662F\u5FAE\u4FE1\u9644\u52A0\u7684\u5B89\u5168\u786E\u8BA4\u6B65\u9AA4\u3002\u914D\u5BF9\u7801\u53EA\u7528\u4E8E\u672C\u6B21\u626B\u7801\u8F6E\u8BE2\uFF0C\u4E0D\u4F1A\u5199\u5165\u914D\u7F6E\u6216\u65E5\u5FD7\u3002": "This is an additional WeChat confirmation step. The pairing code is used only for this connection and is never stored.",
  "\u6B63\u5728\u4FDD\u5B58\u51ED\u636E\u5E76\u9A8C\u8BC1 Harness \u4E0E\u5FAE\u4FE1\u957F\u8F6E\u8BE2\u3002": "Saving credentials and verifying the WeChat connection.",
  "\u5FAE\u4FE1\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u542F\u52A8\u6D88\u606F\u8FDE\u63A5": "Confirmed in WeChat. Starting the message connection",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u65E0\u6CD5\u8BFB\u53D6\u73B0\u6709\u767B\u5F55\u51ED\u636E\u3002\u8BF7\u68C0\u67E5 DSH \u51ED\u636E\u5B58\u50A8\u3002": "WeChat was authorized, but the existing login credential could not be read. Check the DSH credential store.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u767B\u5F55\u51ED\u636E\u65E0\u6CD5\u5199\u5165 DSH \u51ED\u636E\u5B58\u50A8\u3002\u8BF7\u68C0\u67E5\u51ED\u636E\u5B58\u50A8\u662F\u5426\u53EF\u5199\u3002": "WeChat was authorized, but the login credential could not be written to the DSH credential store. Check that the store is writable.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u8D26\u53F7\u914D\u7F6E\u65E0\u6CD5\u5199\u5165\u672C\u673A\u3002\u8BF7\u68C0\u67E5 DSH_HOME \u76EE\u5F55\u6743\u9650\u3002": "WeChat was authorized, but the account configuration could not be saved locally. Check the DSH_HOME directory permissions.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u65E0\u6CD5\u521D\u59CB\u5316\u8D26\u53F7\u72B6\u6001\u6216\u5DE5\u4F5C\u533A\u3002\u8BF7\u68C0\u67E5 DSH_HOME \u548C\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002": "WeChat was authorized, but the account state or workspace could not be initialized. Check DSH_HOME and the workspace directory.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u63D2\u4EF6\u65E0\u6CD5\u8FDE\u63A5\u672C\u673A Harness\u3002\u8BF7\u68C0\u67E5 dsh web \u5730\u5740\u548C\u7AEF\u53E3\u3002": "WeChat was authorized, but the plugin could not connect to the local Harness. Check the dsh web address and port.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u8D85\u65F6\u3002\u8BF7\u786E\u8BA4 dsh web \u672A\u963B\u585E\u3002": "WeChat was authorized, but the Harness health check timed out. Confirm that dsh web is not blocked.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u62D2\u7EDD\u4E86\u672C\u673A\u5065\u5EB7\u68C0\u67E5\u3002\u8BF7\u68C0\u67E5 Host \u4FE1\u4EFB\u914D\u7F6E\u3002": "WeChat was authorized, but Harness denied the local health check. Check the Host trust configuration.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u627E\u4E0D\u5230 Harness \u5065\u5EB7\u68C0\u67E5\u63A5\u53E3\u3002\u8BF7\u786E\u8BA4 Harness \u4E0E\u63D2\u4EF6\u7248\u672C\u517C\u5BB9\u3002": "WeChat was authorized, but the Harness health endpoint was not found. Confirm that Harness and the plugin are compatible.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u8FD4\u56DE\u670D\u52A1\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002": "WeChat was authorized, but the Harness health check returned a service error. Check the dsh web logs.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u54CD\u5E94\u3002\u8BF7\u786E\u8BA4 Harness \u4E0E\u63D2\u4EF6\u7248\u672C\u517C\u5BB9\u3002": "WeChat was authorized, but Harness returned an unrecognized response. Confirm that Harness and the plugin are compatible.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u62D2\u7EDD\u4E86\u5065\u5EB7\u68C0\u67E5\u8BF7\u6C42\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002": "WeChat was authorized, but Harness rejected the health-check request. Check the dsh web logs.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46 Harness \u5065\u5EB7\u68C0\u67E5\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002": "WeChat was authorized, but the Harness health check failed unexpectedly. Check the dsh web logs.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u6D88\u606F\u8FDE\u63A5\u521D\u59CB\u5316\u5931\u8D25\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u540E\u91CD\u8BD5\u3002": "WeChat was authorized, but the message connection could not be initialized. Check the dsh web logs and try again.",
  "\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u4F46\u6FC0\u6D3B\u8FC7\u7A0B\u4E2D\u53D1\u751F\u672A\u77E5\u9519\u8BEF\u3002\u8BF7\u67E5\u770B dsh web \u65E5\u5FD7\u3002": "WeChat was authorized, but an unknown error occurred during activation. Check the dsh web logs.",
  "\u5FAE\u4FE1\u5DF2\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5411\u5DF2\u7ED1\u5B9A\u7684\u673A\u5668\u4EBA\u53D1\u6D88\u606F\u3002": "WeChat is connected and ready for messages.",
  "\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\u5DF2\u7ECF\u7ED1\u5B9A\u5E76\u4FDD\u6301\u5728\u7EBF\u3002": "This WeChat account is connected and online.",
  "\u5FAE\u4FE1\u8D26\u53F7\u53CA\u672C\u673A\u51ED\u636E\u5DF2\u79FB\u9664\u3002": "The WeChat account and local credentials were removed.",
  "\u5DF2\u53D6\u6D88\u5FAE\u4FE1\u7ED1\u5B9A\u3002": "WeChat setup was cancelled.",
  "\u6B63\u5728\u8054\u7CFB\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u3002": "Contacting the WeChat iLink service.",
  "iLink \u957F\u8F6E\u8BE2": "iLink long polling",
  "\u626B\u4E00\u6B21\u7801\uFF0C\u81EA\u52A8\u521B\u5EFA\u5E76\u8FDE\u63A5\u673A\u5668\u4EBA": "Scan once to create and connect a bot",
  "\u4F7F\u7528\u9489\u9489 App \u5B8C\u6210\u673A\u5668\u4EBA\u6388\u6743": "Authorize the bot with the DingTalk app",
  "\u4F7F\u7528\u5DF2\u52A0\u5165\u4F01\u4E1A/\u7EC4\u7EC7\u7684\u9489\u9489\u8D26\u53F7\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801": "Scan the QR code with a DingTalk account that belongs to an organization",
  "\u5728\u6388\u6743\u9875\u70B9\u51FB\u201C\u4E00\u952E\u521B\u5EFA\u65B0\u673A\u5668\u4EBA\u201D": "Select \u201CCreate new bot\u201D on the authorization page",
  "\u8BF7\u52FF\u5173\u95ED\u672C\u9875\uFF0C\u9489\u9489\u5B8C\u6210\u6388\u6743\u540E\u5C06\u81EA\u52A8\u7EE7\u7EED\u3002": "Keep this page open. Setup will continue after DingTalk authorization.",
  "\u7B49\u5F85\u9489\u9489\u626B\u7801\u6388\u6743": "Waiting for DingTalk authorization",
  "\u6388\u6743\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u521B\u5EFA\u9489\u9489\u673A\u5668\u4EBA": "Authorized. Creating the DingTalk bot",
  "\u6B63\u5728\u786E\u8BA4\u9489\u9489\u6388\u6743": "Confirming DingTalk authorization",
  "\u6B63\u5728\u68C0\u67E5\u9489\u9489 Stream \u957F\u8FDE\u63A5\uFF0C\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u663E\u793A\u4E3A\u5728\u7EBF\u3002": "Checking the DingTalk Stream connection. It will appear online when ready.",
  "\u9489\u9489\u673A\u5668\u4EBA\u5DF2\u63A5\u5165\uFF0C\u53EF\u4EE5\u5F00\u59CB\u53D1\u9001\u6D88\u606F\u3002": "The DingTalk bot is connected and ready for messages.",
  "\u8FD9\u4E2A\u9489\u9489\u673A\u5668\u4EBA\u5DF2\u7ECF\u63A5\u5165\u5E76\u4FDD\u6301\u5728\u7EBF\u3002": "This DingTalk bot is connected and online.",
  "Stream \u957F\u8FDE\u63A5": "Stream persistent connection",
  "\u4F7F\u7528\u4F01\u4E1A\u5FAE\u4FE1 App \u626B\u7801\u521B\u5EFA\u667A\u80FD\u673A\u5668\u4EBA": "Scan with WeCom to create an AI bot",
  "\u4F7F\u7528\u4F01\u4E1A\u5FAE\u4FE1 App \u5B8C\u6210\u667A\u80FD\u673A\u5668\u4EBA\u6388\u6743": "Authorize the AI bot with WeCom",
  "\u6253\u5F00\u4F01\u4E1A\u5FAE\u4FE1 App\uFF0C\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801": "Open WeCom and scan the QR code",
  "\u5728\u817E\u8BAF\u6388\u6743\u9875\u9762\u786E\u8BA4\u521B\u5EFA\u667A\u80FD\u673A\u5668\u4EBA": "Confirm bot creation on the Tencent authorization page",
  "\u8FD4\u56DE\u8FD9\u91CC\u7B49\u5F85\u8FDE\u63A5\u5B8C\u6210": "Return here and wait for the connection to complete",
  "\u7B49\u5F85\u4F01\u4E1A\u5FAE\u4FE1 App \u626B\u7801": "Waiting for WeCom scan",
  "\u4F01\u4E1A\u5FAE\u4FE1\u5DF2\u6388\u6743\uFF0C\u6B63\u5728\u8FDE\u63A5\u673A\u5668\u4EBA": "Authorized in WeCom. Connecting the bot",
  "\u51ED\u636E\u6B63\u5728\u5199\u5165\u672C\u673A\uFF0C\u5E76\u542F\u52A8\u4F01\u4E1A\u5FAE\u4FE1 WebSocket \u6D88\u606F\u8FDE\u63A5\u3002": "Saving credentials locally and starting the WeCom WebSocket connection.",
  "WebSocket \u957F\u8FDE\u63A5": "WebSocket persistent connection",
  "\u4F7F\u7528\u624B\u673A QQ \u626B\u7801\u521B\u5EFA\u5E76\u7ED1\u5B9A\u673A\u5668\u4EBA": "Scan with mobile QQ to create and connect a bot",
  "\u4F7F\u7528\u624B\u673A QQ \u5B8C\u6210\u673A\u5668\u4EBA\u7ED1\u5B9A": "Complete bot setup with mobile QQ",
  "\u6253\u5F00\u624B\u673A QQ\uFF0C\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801": "Open mobile QQ and scan the QR code",
  "\u5728\u817E\u8BAF\u6388\u6743\u9875\u9762\u786E\u8BA4\u521B\u5EFA\u6216\u7ED1\u5B9A\u673A\u5668\u4EBA": "Confirm bot creation or connection on the Tencent authorization page",
  "\u7B49\u5F85\u624B\u673A QQ \u626B\u7801": "Waiting for mobile QQ scan",
  "QQ \u5DF2\u6388\u6743\uFF0C\u6B63\u5728\u8FDE\u63A5\u673A\u5668\u4EBA": "Authorized in QQ. Connecting the bot",
  "\u51ED\u636E\u6B63\u5728\u5199\u5165\u672C\u673A\uFF0C\u5E76\u542F\u52A8 QQ WebSocket \u6D88\u606F\u8FDE\u63A5\u3002": "Saving credentials locally and starting the QQ WebSocket connection.",
  "\u4F7F\u7528\u624B\u673A WhatsApp \u626B\u63CF\u4E8C\u7EF4\u7801\u5373\u53EF\u63A5\u5165\u3002": "Scan the QR code with WhatsApp to connect.",
  "\u7528\u624B\u673A WhatsApp \u626B\u63CF\u4E8C\u7EF4\u7801": "Scan with WhatsApp on your phone",
  "\u6253\u5F00 WhatsApp \u2192 \u8BBE\u7F6E \u2192 \u5DF2\u5173\u8054\u8BBE\u5907": "Open WhatsApp \u2192 Settings \u2192 Linked devices",
  "\u70B9\u51FB\u201C\u5173\u8054\u8BBE\u5907\u201D\u5E76\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801": "Select \u201CLink a device\u201D and scan the QR code",
  "\u7B49\u5F85 WhatsApp \u626B\u7801": "Waiting for WhatsApp scan",
  "\u5DF2\u626B\u7801\uFF0C\u6B63\u5728\u8FDE\u63A5 WhatsApp": "Scanned. Connecting WhatsApp",
  "\u6B63\u5728\u5EFA\u7ACB\u5B89\u5168\u7684\u5173\u8054\u8BBE\u5907\u4F1A\u8BDD\u3002": "Creating a secure linked-device session.",
  "\u5173\u8054\u8BBE\u5907\u6B63\u5728\u63A5\u5165 DeepSeek Harness\u3002": "Linking the device to DeepSeek Harness.",
  "WhatsApp Web \u5173\u8054\u8BBE\u5907\u8FD0\u884C\u6B63\u5E38": "WhatsApp linked device is healthy",
  "\u67E5\u770B WhatsApp \u8BBF\u95EE\u6A21\u5F0F\u8BF4\u660E": "View WhatsApp access mode details",
  "WhatsApp \u8BBF\u95EE\u6A21\u5F0F": "WhatsApp access mode",
  "\u4EC5\u81EA\u5DF1\u6A21\u5F0F": "Only me",
  "\u6307\u5B9A\u8054\u7CFB\u4EBA\u6A21\u5F0F": "Selected contacts",
  "\u5F00\u653E\u54CD\u5E94\u6A21\u5F0F": "Open responses",
  "\u4EC5\u81EA\u5DF1\u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF09": "Only me (default)",
  "\u5DF2\u751F\u6548\uFF1A": "Active: ",
  "\u53EA\u54CD\u5E94\u5DF2\u7ED1\u5B9A WhatsApp \u8D26\u53F7\u7684\u81EA\u804A\u6D88\u606F\u3002": "Only respond to self-chat messages from the linked WhatsApp account.",
  "\u54CD\u5E94\u81EA\u804A\u548C\u767D\u540D\u5355\u8054\u7CFB\u4EBA\u7684\u79C1\u804A\uFF0C\u5FFD\u7565\u7FA4\u804A\u3002": "Respond to self-chat and allowlisted direct messages; ignore group messages.",
  "\u54CD\u5E94\u6240\u6709\u79C1\u804A\uFF0C\u4EE5\u53CA\u7FA4\u804A\u4E2D\u7684\u63D0\u53CA\u6216\u56DE\u590D\u3002": "Respond to all direct messages and to group mentions or replies.",
  "\u5141\u8BB8\u79C1\u804A\u7684 WhatsApp \u7535\u8BDD\u53F7\u7801": "WhatsApp phone numbers allowed to send direct messages",
  "\u6BCF\u884C\u4E00\u4E2A\u542B\u56FD\u5BB6\u6216\u5730\u533A\u4EE3\u7801\u7684\u53F7\u7801": "One number with country or region code per line",
  "\u53EF\u4EE5\u5305\u542B\u5F00\u5934\u7684 +\uFF0C\u4FDD\u5B58\u65F6\u4F1A\u81EA\u52A8\u79FB\u9664\u3002": "A leading + is allowed and removed when saved.",
  "\u4EC5\u6307\u5B9A\u8054\u7CFB\u4EBA\u6A21\u5F0F\u4F7F\u7528\u767D\u540D\u5355\uFF0C\u5207\u6362\u6A21\u5F0F\u65F6\u4F1A\u4FDD\u7559\u3002": "Only Selected contacts uses the allowlist; it is retained when modes change.",
  "\u767D\u540D\u5355\u4E3A\u7A7A\uFF1B\u4FDD\u5B58\u540E\u5C06\u53EA\u63A5\u53D7\u81EA\u804A\u6D88\u606F\u3002": "The allowlist is empty; only self-chat messages will be accepted after saving.",
  "\u7535\u8BDD\u53F7\u7801\u5FC5\u987B\u5305\u542B\u56FD\u5BB6\u6216\u5730\u533A\u4EE3\u7801\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002": "Each phone number must include a country or region code on its own line.",
  "WhatsApp \u8BBF\u95EE\u8BBE\u7F6E\u6682\u4E0D\u53EF\u7528\u3002": "WhatsApp access settings are currently unavailable.",
  "WhatsApp \u8BBF\u95EE\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25\u3002": "Could not save WhatsApp access settings.",
  "Bot API \u957F\u8F6E\u8BE2": "Bot API long polling",
  " Gateway \u957F\u8FDE\u63A5": " Gateway persistent connection",
  "Gateway \u957F\u8FDE\u63A5": "Gateway persistent connection",
  " Socket Mode \u957F\u8FDE\u63A5": " Socket Mode persistent connection",
  "Socket Mode \u957F\u8FDE\u63A5": "Socket Mode persistent connection",
  "\u63A5\u5165 Telegram \u673A\u5668\u4EBA": "Connect a Telegram bot",
  "\u5148\u901A\u8FC7 @BotFather \u83B7\u53D6 Bot Token\uFF0C\u518D\u5728\u8FD9\u91CC\u5B8C\u6210\u63A5\u5165\u3002": "Get a Bot Token from @BotFather, then connect it here.",
  "\u586B\u5199 @BotFather \u751F\u6210\u7684 Bot Token": "Enter the Bot Token from @BotFather",
  "\u8BBF\u95EE\u6A21\u5F0F": "Access mode",
  "\u8BBF\u95EE\u8BBE\u7F6E": "Access settings",
  "Telegram \u8BBF\u95EE\u6A21\u5F0F": "Telegram access mode",
  "\u67E5\u770B Telegram \u8BBF\u95EE\u6A21\u5F0F\u8BF4\u660E": "View Telegram access mode details",
  "\u7FA4\u804A\u5168\u90E8\u5FFD\u7565\uFF0C\u79C1\u804A\u4EC5\u5141\u8BB8\u767D\u540D\u5355\u7528\u6237\u3002": "All group messages are ignored; only allowlisted users may send DMs.",
  "\u4FDD\u6301\u539F\u6709\u884C\u4E3A\uFF1A\u79C1\u804A\u76F4\u63A5\u54CD\u5E94\uFF0C\u7FA4\u804A\u5728\u88AB\u63D0\u53CA\u6216\u56DE\u590D\u65F6\u54CD\u5E94\u3002": "Keep the original behavior: respond to DMs and to group mentions or replies.",
  "\u5B89\u5168\u6A21\u5F0F": "Safe mode",
  "\u517C\u5BB9\u6A21\u5F0F": "Compatible mode",
  "\u5DF2\u751F\u6548\uFF1A\u5B89\u5168\u6A21\u5F0F": "Active: Safe mode",
  "\u5DF2\u751F\u6548\uFF1A\u517C\u5BB9\u6A21\u5F0F": "Active: Compatible mode",
  "\u6A21\u5F0F": "Mode",
  "\u517C\u5BB9\u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF09": "Compatible mode (default)",
  "\u5B89\u5168\u6A21\u5F0F\uFF08\u79C1\u804A\u767D\u540D\u5355\uFF09": "Safe mode (private-chat allowlist)",
  "\u5141\u8BB8\u79C1\u804A\u7684 Telegram User ID": "Telegram User IDs allowed to send DMs",
  "\u6BCF\u884C\u4E00\u4E2A\u6570\u5B57 User ID": "One numeric User ID per line",
  "\u767D\u540D\u5355\u4EC5\u5C5E\u4E8E\u5F53\u524D\u673A\u5668\u4EBA\u3002": "This allowlist belongs only to the current bot.",
  "\u517C\u5BB9\u6A21\u5F0F\u4E0B\u6682\u4E0D\u4F7F\u7528\u767D\u540D\u5355\uFF0C\u5207\u6362\u6A21\u5F0F\u65F6\u4F1A\u4FDD\u7559\u3002": "Compatible mode does not enforce the allowlist; it is retained when modes change.",
  "\u767D\u540D\u5355\u4E3A\u7A7A\uFF1B\u4FDD\u5B58\u540E\u8BE5\u673A\u5668\u4EBA\u4F1A\u62D2\u7EDD\u6240\u6709\u5165\u7AD9\u6D88\u606F\u3002": "The allowlist is empty; this bot will reject all inbound messages after saving.",
  "\u6B63\u5728\u4FDD\u5B58\u2026": "Saving\u2026",
  "\u4FDD\u5B58\u8BBF\u95EE\u8BBE\u7F6E": "Save access settings",
  "User ID \u5FC5\u987B\u662F 1\u201316 \u4F4D\u6B63\u6574\u6570\uFF0C\u6BCF\u884C\u4E00\u4E2A\u3002": "Each User ID must be a 1\u201316 digit positive integer on its own line.",
  "Telegram \u8BBF\u95EE\u8BBE\u7F6E\u6682\u4E0D\u53EF\u7528\u3002": "Telegram access settings are currently unavailable.",
  "Telegram \u8BBF\u95EE\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25\u3002": "Could not save Telegram access settings.",
  "\u63A5\u5165 Discord \u673A\u5668\u4EBA": "Connect a Discord bot",
  "\u5148\u5728 Developer Portal \u521B\u5EFA Bot \u5E76\u9080\u8BF7\u5230\u670D\u52A1\u5668\uFF0C\u518D\u5728\u8FD9\u91CC\u5B8C\u6210\u63A5\u5165\u3002": "Create a bot in the Developer Portal and invite it to your server, then connect it here.",
  "\u586B\u5199 Discord Developer Portal \u7684 Bot Token": "Enter the Bot Token from the Discord Developer Portal",
  "\u63A5\u5165 Slack \u673A\u5668\u4EBA": "Connect a Slack bot",
  "\u5148\u7528 Manifest \u521B\u5EFA\u5E76\u914D\u7F6E Slack App": "Create and configure a Slack app with the manifest",
  "\u590D\u5236\u914D\u7F6E\u540E\uFF0C\u5728 Slack \u9009\u62E9 From a manifest\uFF1B\u521B\u5EFA\u5B8C\u6210\u540E\u751F\u6210 connections:write App Token\uFF0C\u5E76\u5C06\u5E94\u7528\u5B89\u88C5\u5230\u5DE5\u4F5C\u533A\u3002": "Copy the manifest and choose \u201CFrom a manifest\u201D in Slack. Then create a connections:write App Token and install the app to your workspace.",
  "\u590D\u5236 Manifest": "Copy manifest",
  "\u5DF2\u590D\u5236 Manifest": "Manifest copied",
  "\u6253\u5F00 Slack \u521B\u5EFA\u9875": "Open Slack app creation",
  "Bot Token \u6765\u81EA OAuth & Permissions\uFF1BApp Token \u6765\u81EA Basic Information\uFF0C\u5E76\u4E14\u5FC5\u987B\u5305\u542B connections:write\u3002": "Get the Bot Token from OAuth & Permissions and the App Token from Basic Information. The App Token must include connections:write.",
  "\u4F7F\u7528\u5B98\u65B9 App Manifest \u5FEB\u901F\u914D\u7F6E\u673A\u5668\u4EBA\uFF0C\u518D\u586B\u5199 Bot Token \u4E0E App Token \u5EFA\u7ACB\u672C\u5730 Socket Mode \u8FDE\u63A5\u3002": "Configure the bot with the official app manifest, then enter the Bot Token and App Token to start a local Socket Mode connection.",
  "Slack \u5DE5\u4F5C\u533A": "Slack workspace",
  "Bot Token \u4E0E App Token": "Bot Token and App Token",
  "\u586B\u5199 Bot Token": "Enter Bot Token",
  "\u624B\u52A8\u63A5\u5165\u98DE\u4E66\u673A\u5668\u4EBA": "Connect Feishu bot manually",
  "\u624B\u52A8\u63A5\u5165\u9489\u9489\u673A\u5668\u4EBA": "Connect DingTalk bot manually",
  "\u624B\u52A8\u63A5\u5165\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "Connect WeCom bot manually",
  "\u624B\u52A8\u63A5\u5165QQ\u673A\u5668\u4EBA": "Connect QQ bot manually",
  "\u586B\u5199\u98DE\u4E66\u5F00\u653E\u5E73\u53F0 App ID": "Enter the Feishu Open Platform App ID",
  "\u586B\u5199\u98DE\u4E66\u5F00\u653E\u5E73\u53F0 App Secret": "Enter the Feishu Open Platform App Secret",
  "\u586B\u5199\u9489\u9489\u5E94\u7528 Client ID": "Enter the DingTalk Client ID",
  "\u586B\u5199\u9489\u9489\u5E94\u7528 Client Secret": "Enter the DingTalk Client Secret",
  "\u586B\u5199\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA Bot ID": "Enter the WeCom AI Bot ID",
  "\u586B\u5199\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA Secret": "Enter the WeCom AI Bot Secret",
  "\u586B\u5199 QQ \u5F00\u653E\u5E73\u53F0 AppID": "Enter the QQ Open Platform AppID",
  "\u586B\u5199 QQ \u5F00\u653E\u5E73\u53F0 AppSecret": "Enter the QQ Open Platform AppSecret",
  "\u626B\u7801\u63A5\u5165\u5FAE\u4FE1\u673A\u5668\u4EBA": "Connect WeChat bot by QR code",
  "\u626B\u7801\u63A5\u5165\u98DE\u4E66\u673A\u5668\u4EBA": "Connect Feishu bot by QR code",
  "\u626B\u7801\u63A5\u5165\u9489\u9489\u673A\u5668\u4EBA": "Connect DingTalk bot by QR code",
  "\u626B\u7801\u63A5\u5165\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "Connect WeCom bot by QR code",
  "\u626B\u7801\u63A5\u5165 QQ \u673A\u5668\u4EBA": "Connect QQ bot by QR code",
  "\u626B\u7801\u63A5\u5165 WhatsApp \u673A\u5668\u4EBA": "Connect WhatsApp by QR code",
  "\u626B\u7801\u7ED1\u5B9A WhatsApp \u673A\u5668\u4EBA": "Connect WhatsApp by QR code",
  "\u4F7F\u7528 App ID \u548C App Secret \u7ED1\u5B9A\u98DE\u4E66\u673A\u5668\u4EBA": "Connect a Feishu bot with App ID and App Secret",
  "\u4F7F\u7528 Client ID \u548C Client Secret \u7ED1\u5B9A\u9489\u9489\u673A\u5668\u4EBA": "Connect a DingTalk bot with Client ID and Client Secret",
  "\u4F7F\u7528 Bot ID \u548C Secret \u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "Connect a WeCom bot with Bot ID and Secret",
  "\u4F7F\u7528 AppID \u548C AppSecret \u7ED1\u5B9A QQ \u673A\u5668\u4EBA": "Connect a QQ bot with AppID and AppSecret",
  "\u4F7F\u7528 Manifest \u548C\u53CC Token \u63A5\u5165 Slack \u673A\u5668\u4EBA": "Connect a Slack bot with a manifest and two tokens",
  "\u4F7F\u7528 Bot Token \u63A5\u5165 Telegram \u673A\u5668\u4EBA": "Connect a Telegram bot with a Bot Token",
  "\u4F7F\u7528 Bot Token \u63A5\u5165 Discord \u673A\u5668\u4EBA": "Connect a Discord bot with a Bot Token",
  "\u53D6\u6D88\u7ED1\u5B9A": "Cancel setup",
  "\u53D6\u6D88\u63A5\u5165": "Cancel setup",
  "\u4E8C\u7EF4\u7801\u7531\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u7B7E\u53D1\u3002\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u5E76\u786E\u8BA4\u540E\uFF0C\u8D26\u53F7\u51ED\u636E\u4F1A\u76F4\u63A5\u5199\u5165 Harness Host\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u6536\u5230 bot_token\u3002": "The QR code is issued by Tencent WeChat iLink. After you scan and confirm, account credentials are written directly to the Harness Host and are never exposed to the browser.",
  "\u626B\u7801\u8D26\u53F7\u5FC5\u987B\u5DF2\u52A0\u5165\u4F01\u4E1A/\u7EC4\u7EC7\u3002\u5982\u679C\u9489\u9489\u63D0\u793A\u5C1A\u672A\u52A0\u5165\u7EC4\u7EC7\uFF0C\u8BF7\u5728\u63D0\u793A\u9875\u521B\u5EFA\u7EC4\u7EC7\uFF0C\u6216\u6362\u7528\u5DF2\u52A0\u5165\u7EC4\u7EC7\u7684\u8D26\u53F7\u3002": "The DingTalk account must belong to an organization. If prompted, create an organization or use an account that already belongs to one.",
  "\u8BF7\u5728\u624B\u673A\u4E0A\u6838\u5BF9\u5E76\u786E\u8BA4\u6388\u6743\u3002\u90E8\u5206\u8D26\u53F7\u4F1A\u989D\u5916\u663E\u793A\u4E00\u4E2A\u914D\u5BF9\u6570\u5B57\uFF0C\u9875\u9762\u4F1A\u5728\u9700\u8981\u65F6\u63D0\u793A\u8F93\u5165\u3002": "Review and confirm authorization on your phone. Some accounts may also require a pairing number.",
  "\u6388\u6743\u7531\u9489\u9489\u5B98\u65B9\u9875\u9762\u5B8C\u6210\u3002\u626B\u7801\u8D26\u53F7\u5FC5\u987B\u5DF2\u52A0\u5165\u4E00\u4E2A\u4F01\u4E1A/\u7EC4\u7EC7\u5E76\u6709\u6743\u521B\u5EFA\u673A\u5668\u4EBA\uFF1B\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u5E94\u7528\u51ED\u636E\u4F1A\u76F4\u63A5\u5199\u5165 Harness Host\u3002": "Authorization is completed on DingTalk\u2019s official page. The account must belong to an organization and be allowed to create bots. Credentials are written directly to the Harness Host.",
  "\u626B\u7801\u7531\u817E\u8BAF\u5B98\u65B9\u9875\u9762\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u586B\u5199 AppID \u6216 AppSecret\u3002\u626B\u7801\u6210\u529F\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u81EA\u52A8\u8FDE\u63A5 DeepSeek Harness\u3002": "Scanning is completed on Tencent\u2019s official page. No AppID or AppSecret is required, and the bot connects automatically.",
  "\u626B\u7801\u7531\u817E\u8BAF\u5B98\u65B9\u9875\u9762\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u586B\u5199 Bot ID \u6216 Secret\u3002\u521B\u5EFA\u6210\u529F\u540E\uFF0C\u673A\u5668\u4EBA\u4F1A\u81EA\u52A8\u8FDE\u63A5 DeepSeek Harness\u3002": "Scanning is completed on Tencent\u2019s official page. No Bot ID or Secret is required, and the bot connects automatically.",
  "\u817E\u8BAF\u9875\u9762\u4F1A\u521B\u5EFA\u6216\u7ED1\u5B9A\u4E00\u4E2A QQ \u673A\u5668\u4EBA\uFF0C\u5E76\u628A\u8FDE\u63A5\u51ED\u636E\u5B89\u5168\u4EA4\u7ED9\u672C\u673A Harness Host\u3002": "Tencent will create or connect a QQ bot and securely deliver its credentials to the local Harness Host.",
  "\u4F01\u4E1A\u5FAE\u4FE1\u5B98\u65B9\u9875\u9762\u4F1A\u521B\u5EFA\u4E00\u4E2A\u667A\u80FD\u673A\u5668\u4EBA\uFF0C\u5E76\u628A\u8FDE\u63A5\u51ED\u636E\u5B89\u5168\u4EA4\u7ED9\u672C\u673A Harness Host\u3002": "WeCom will create an AI bot and securely deliver its credentials to the local Harness Host.",
  "\u4ECE\u6B64 Harness \u79FB\u9664\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\uFF1F": "Remove this WeChat account from Harness?",
  "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 bot_token\u3001\u8D26\u53F7\u914D\u7F6E\u548C\u4F1A\u8BDD\u6620\u5C04\u3002\u5176\u4ED6\u5FAE\u4FE1\u8D26\u53F7\u4E0D\u53D7\u5F71\u54CD\u3002": "This stops the message connection and removes the locally stored bot_token, account configuration, and session mappings. Other WeChat accounts are not affected.",
  "\u6B64\u64CD\u4F5C\u4F1A\u505C\u6B62\u8FD9\u4E2A\u673A\u5668\u4EBA\u7684\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u4FDD\u5B58\u5728\u672C\u673A\u7684\u63A5\u5165\u914D\u7F6E\u548C\u51ED\u636E\u3002\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u5E94\u7528\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\uFF0C\u5176\u4ED6\u673A\u5668\u4EBA\u4E5F\u4E0D\u53D7\u5F71\u54CD\u3002": "This stops the bot connection and removes the locally stored configuration and credentials. The app in Feishu Open Platform is not deleted, and other bots are not affected.",
  "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u9489\u9489\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot in DingTalk Open Platform is not deleted.",
  "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u4F01\u4E1A\u5FAE\u4FE1\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot in WeCom is not deleted.",
  "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E\u3001\u673A\u5668\u4EBA\u914D\u7F6E\u53CA\u4F1A\u8BDD\u6620\u5C04\u3002\u817E\u8BAF\u5E73\u53F0\u4E2D\u7684\u673A\u5668\u4EBA\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002": "This stops the message connection and removes the locally stored app credentials, bot configuration, and session mappings. The bot on Tencent\u2019s platform is not deleted.",
  "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 WhatsApp \u5173\u8054\u8BBE\u5907\u548C\u4F1A\u8BDD\u6620\u5C04\u3002": "This stops the message connection and removes the locally stored WhatsApp linked device and session mappings.",
  "\u6B63\u5728\u8BFB\u53D6\u98DE\u4E66\u673A\u5668\u4EBA\u5217\u8868": "Loading Feishu bots",
  "\u6B63\u5728\u8BFB\u53D6\u98DE\u4E66\u8FDE\u63A5\u72B6\u6001\u2026": "Loading Feishu connection status\u2026",
  "\u6B63\u5728\u8BFB\u53D6\u5FAE\u4FE1\u8FDE\u63A5\u72B6\u6001\u2026": "Loading WeChat connection status\u2026",
  "\u6B63\u5728\u8BFB\u53D6\u9489\u9489\u8FDE\u63A5\u72B6\u6001\u2026": "Loading DingTalk connection status\u2026",
  "\u901A\u8FC7\u626B\u7801\u628A\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165 DeepSeek Harness": "Connect a DingTalk bot to DeepSeek Harness by QR code",
  "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6": "DingTalk did not return QR setup progress",
  "\u9489\u9489\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1": "DingTalk did not return a valid setup attempt",
  "\u9489\u9489 Stream \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38": "DingTalk Stream connection is healthy",
  "\u9489\u9489\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868": "DingTalk did not return a valid bot list",
  "${totals.connected} / ${totals.configured} \u5728\u7EBF": "${totals.connected} / ${totals.configured} online",
  "\u7528\u4E8E\u628A\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165 DeepSeek Harness \u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801": "One-time QR code for connecting a DingTalk bot to DeepSeek Harness",
  "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\\n\u8BF7\u91CD\u65B0\u751F\u6210": "QR code expired\\nGenerate a new one",
  "\u673A\u5668\u4EBA\u5DF2\u521B\u5EFA\uFF0C\u6B63\u5728\u5EFA\u7ACB\u6D88\u606F\u8FDE\u63A5": "Bot created. Starting the message connection",
  "\u9489\u9489\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u5B89\u5168\u7684\u4E8C\u7EF4\u7801": "DingTalk did not return a secure QR code",
  "\u9489\u9489\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u9489\u9489 App \u626B\u63CF\u3002": "DingTalk QR code generated. Scan it with the DingTalk app.",
  "\u9489\u9489\u673A\u5668\u4EBA\u51ED\u636E\u5DF2\u7ED1\u5B9A\u3002": "DingTalk bot credentials connected.",
  "\u5DF2\u53D6\u6D88\u9489\u9489\u673A\u5668\u4EBA\u63A5\u5165\u3002": "DingTalk bot setup cancelled.",
  "\u9489\u9489\u673A\u5668\u4EBA\u53CA\u672C\u673A\u51ED\u636E\u5DF2\u79FB\u9664\u3002": "DingTalk bot and local credentials removed.",
  "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u4E8C\u7EF4\u7801\u4FE1\u606F": "Feishu did not return QR code information",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u4E8C\u7EF4\u7801\u4FE1\u606F\u4E0D\u5B8C\u6574": "Feishu returned incomplete QR code information",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u673A\u5668\u4EBA\u72B6\u6001": "Feishu returned an invalid bot status",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u7684\u673A\u5668\u4EBA\u7F3A\u5C11 botId": "The Feishu bot is missing botId",
  "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u8FDE\u63A5\u72B6\u6001": "Feishu did not return connection status",
  "\u98DE\u4E66\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u521B\u5EFA\u8FDB\u5EA6": "Feishu did not return creation progress",
  "\u98DE\u4E66\u670D\u52A1\u8FD4\u56DE\u4E86\u672A\u77E5\u7684\u521B\u5EFA\u72B6\u6001": "Feishu returned an unknown creation status",
  "\u5DF2\u63A5\u5165 ${totals.configured} \u4E2A\u673A\u5668\u4EBA\uFF0C\u5176\u4E2D ${totals.connected} \u4E2A\u5728\u7EBF": "${totals.connected} of ${totals.configured} bots online",
  "\u5C1A\u672A\u63A5\u5165\u673A\u5668\u4EBA": "No bot connected yet",
  "\u7528\u4E8E\u65B0\u589E DeepSeek Harness \u98DE\u4E66\u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u6388\u6743\u4E8C\u7EF4\u7801": "One-time authorization QR code for adding a Feishu bot to DeepSeek Harness",
  "\u8BF7\u5237\u65B0\u540E\u91CD\u65B0\u626B\u7801": "Refresh and scan again",
  '${connected ? "\u68C0\u67E5\u8FDE\u63A5" : "\u91CD\u8BD5\u8FDE\u63A5"}${bot.name}': '${connected ? "Check connection" : "Reconnect"} ${bot.name}',
  "\u65E0\u6CD5\u8BFB\u53D6\u98DE\u4E66\u673A\u5668\u4EBA": "Could not load Feishu bots",
  "\u6388\u6743\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u98DE\u4E66\u626B\u7801\u3002": "Authorization QR code generated. Scan it with Feishu.",
  "\u98DE\u4E66\u673A\u5668\u4EBA\u51ED\u636E\u5DF2\u7ED1\u5B9A\u3002": "Feishu bot credentials connected.",
  "\u5DF2\u53D6\u6D88\u6DFB\u52A0\u673A\u5668\u4EBA\u3002": "Adding the bot was cancelled.",
  "${newBot.bot.name}\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5728\u98DE\u4E66\u4E2D\u5F00\u59CB\u804A\u5929\u3002": "${newBot.bot.name} is connected and ready to chat in Feishu.",
  "${bot.name}\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u673A\u5668\u4EBA\u72B6\u6001\u3002": "${bot.name} operation failed. Check the bot status.",
  "${bot.name}\u5DF2\u4ECE\u6B64 DeepSeek Harness \u79FB\u9664\uFF1B\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u4E2D\u7684\u5E94\u7528\u672A\u88AB\u5220\u9664\u3002": "${bot.name} was removed from this DeepSeek Harness. The app in Feishu Open Platform was not deleted.",
  "\u65E0\u6CD5\u8BFB\u53D6\u8FDE\u63A5\u72B6\u6001": "Could not load connection status",
  "QQ \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6": "QQ did not return QR setup progress",
  "QQ \u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1": "QQ did not return a valid setup attempt",
  "QQ WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38": "QQ WebSocket connection is healthy",
  "QQ \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868": "QQ did not return a valid bot list",
  "\u5C1A\u672A\u7ED1\u5B9A QQ \u673A\u5668\u4EBA": "No QQ bot connected yet",
  "\u7528\u4E8E\u7ED1\u5B9A QQ \u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801": "One-time QR code for connecting a QQ bot",
  "${channel}${connectionSummary}\u8FD0\u884C\u6B63\u5E38": "${channel}${connectionSummary} is healthy",
  "${channel} \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868": "${channel} did not return a valid bot list",
  "\u4F7F\u7528 Bot Token \u63A5\u5165 ${channel} \u673A\u5668\u4EBA": "Connect a ${channel} bot with a Bot Token",
  "${model.totals.connected} / ${model.totals.configured} \u5728\u7EBF": "${model.totals.connected}/${model.totals.configured} online",
  " Bot API \u957F\u8F6E\u8BE2": " Bot API long polling",
  "\u4F01\u4E1A\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u7ED1\u5B9A\u8FDB\u5EA6": "WeCom did not return QR setup progress",
  "\u4F01\u4E1A\u5FAE\u4FE1\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1": "WeCom did not return a valid setup attempt",
  "\u4F01\u4E1A\u5FAE\u4FE1 WebSocket \u957F\u8FDE\u63A5\u8FD0\u884C\u6B63\u5E38": "WeCom WebSocket connection is healthy",
  "\u4F01\u4E1A\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868": "WeCom did not return a valid bot list",
  "\u5C1A\u672A\u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA": "No WeCom bot connected yet",
  "\u7528\u4E8E\u7ED1\u5B9A\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801": "One-time QR code for connecting a WeCom bot",
  "\u5FAE\u4FE1\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1": "WeChat did not return a valid setup attempt",
  "\u5FAE\u4FE1\u7ED1\u5B9A\u6CA1\u6709\u5B8C\u6210": "WeChat setup did not complete",
  "\u5FAE\u4FE1\u8FDE\u63A5\u6B63\u5E38": "WeChat connection is healthy",
  "\u5FAE\u4FE1\u8FDE\u63A5\u672A\u5C31\u7EEA": "WeChat connection is not ready",
  "\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u56FE\u7247\uFF0C\u8BF7\u7528 /models \u67E5\u770B\u53EF\u7528\u6A21\u578B\uFF0C\u518D\u7528 /model <\u5E8F\u53F7> \u5207\u6362\u540E\u91CD\u53D1\u3002": "The current model does not support images. Use /models to list models, then /model <number> to switch and resend.",
  "\u56FE\u7247\u8D85\u8FC7\u5BBF\u4E3B\u5141\u8BB8\u7684\u5927\u5C0F\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002": "The image exceeds the Host size limit. Compress it and try again.",
  "\u56FE\u7247\u5206\u8FA8\u7387\u8FC7\u9AD8\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002": "The image resolution is too high. Compress it and try again.",
  "\u56FE\u7247\u5185\u5BB9\u65E0\u6548\u6216\u683C\u5F0F\u4E0D\u53D7\u652F\u6301\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002": "The image is invalid or unsupported. Send it again.",
  "\u672A\u80FD\u8BFB\u53D6\u56FE\u7247\u5185\u5BB9\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002": "The image could not be read. Send it again.",
  "\u56FE\u7247\u683C\u5F0F\u4E0E\u5B9E\u9645\u5185\u5BB9\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u3002": "The declared image format does not match its content. Send it again.",
  "\u4E00\u6B21\u53D1\u9001\u7684\u56FE\u7247\u6570\u91CF\u8D85\u8FC7\u5BBF\u4E3B\u9650\u5236\uFF0C\u8BF7\u51CF\u5C11\u540E\u91CD\u8BD5\u3002": "The message exceeds the Host image-count limit. Remove some images and try again.",
  "\u56FE\u7247\u603B\u5927\u5C0F\u8D85\u8FC7\u5BBF\u4E3B\u9650\u5236\uFF0C\u8BF7\u51CF\u5C11\u56FE\u7247\u6216\u538B\u7F29\u540E\u91CD\u8BD5\u3002": "The images exceed the Host total-size limit. Remove or compress some images and try again.",
  "\u56FE\u7247\u4E0B\u8F7D\u5730\u5740\u53D1\u751F\u4E86\u91CD\u5B9A\u5411\uFF0C\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u3002": "The image download redirected and cannot be read.",
  "\u56FE\u7247\u8D85\u8FC7 5 MB\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5\u3002": "The image exceeds 5 MB. Compress it and try again.",
  "\u4E00\u6B21\u53D1\u9001\u7684\u56FE\u7247\u603B\u5927\u5C0F\u8FC7\u5927\uFF0C\u8BF7\u51CF\u5C11\u56FE\u7247\u6570\u91CF\u6216\u538B\u7F29\u540E\u91CD\u8BD5\u3002": "The images are too large in total. Remove or compress some images and try again.",
  "\u56FE\u7247\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u9001\u540E\u518D\u8BD5\u3002": "The image download failed. Send it again.",
  "\u6682\u4E0D\u652F\u6301\u8BE5\u56FE\u7247\u683C\u5F0F\uFF0C\u8BF7\u53D1\u9001 JPEG\u3001PNG\u3001WebP \u6216 GIF \u56FE\u7247\u3002": "This image format is unsupported. Send a JPEG, PNG, WebP, or GIF image.",
  "\u6D88\u606F\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002": "Message processing failed. Try again later.",
  "\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u8D26\u53F7\u5217\u8868": "WeChat did not return a valid account list",
  "\u5C1A\u672A\u7ED1\u5B9A\u5FAE\u4FE1": "No WeChat account connected yet",
  "\u7528\u4E8E\u628A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7ED1\u5B9A\u5230 DeepSeek Harness \u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801": "One-time QR code for connecting a WeChat bot to DeepSeek Harness",
  "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u6D88\u606F\u957F\u8F6E\u8BE2\u53D8\u4E3A\u5728\u7EBF": "Keep this page open until long polling is online",
  "\u5FAE\u4FE1\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u3002": "WeChat QR code generated. Scan it with WeChat on your phone.",
  "\u79FB\u9664\u5931\u8D25\uFF1A${presentError(error).message}": "Removal failed: ${presentError(error).message}",
  "\u65E0\u6CD5\u8BFB\u53D6\u5FAE\u4FE1\u72B6\u6001": "Could not load WeChat status",
  "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u626B\u7801\u8FDB\u5EA6": "WhatsApp did not return QR setup progress",
  "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u626B\u7801\u4EFB\u52A1": "WhatsApp did not return a valid setup attempt",
  "WhatsApp \u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868": "WhatsApp did not return a valid account list",
  "\u7528\u4E8E\u5173\u8054 WhatsApp \u8BBE\u5907\u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801": "One-time QR code for linking a WhatsApp device"
});
var en = EN;
var zh = Object.freeze(Object.fromEntries(
  Object.keys(EN).map((key) => [key, key === "$locale" ? "zh" : key])
));
var translate = (key) => key;
function setImTranslator(next) {
  translate = typeof next === "function" ? next : (key) => key;
}
function isEnglish() {
  return translate("$locale") === "en";
}
function channelName(value) {
  return localizeText(value);
}
function translateDynamic(text) {
  let match = /^(\d+) \/ (\d+) 在线$/.exec(text);
  if (match) return `${match[1]}/${match[2]} online`;
  match = /^已接入 (\d+) 个机器人，其中 (\d+) 个在线$/.exec(text);
  if (match) return `${match[2]} of ${match[1]} bots online`;
  match = /^正在读取\s*(.+?)\s*机器人状态…$/.exec(text);
  if (match) return `Loading ${channelName(match[1])} bot status\u2026`;
  match = /^无法读取\s*(.+?)\s*机器人状态$/.exec(text);
  if (match) return `Could not load ${channelName(match[1])} bot status`;
  match = /^尚未接入\s*(.+?)\s*机器人$/.exec(text);
  if (match) return `No ${channelName(match[1])} bot connected yet`;
  match = /^已接入的\s*(.+?)\s*机器人$/.exec(text);
  if (match) return `Connected ${channelName(match[1])} bots`;
  match = /^手动接入(.+)机器人$/.exec(text);
  if (match) return `Connect ${channelName(match[1])} bot manually`;
  match = /^(.+) 设置$/.exec(text);
  if (match) return `${channelName(match[1])} settings`;
  match = /^从 DeepSeek Harness 移除“(.+)”？$/.exec(text);
  if (match) return `Remove \u201C${match[1]}\u201D from DeepSeek Harness?`;
  match = /^从 DeepSeek Harness 移除(.+)$/.exec(text);
  if (match) return `Remove ${match[1]} from DeepSeek Harness`;
  match = /^(.+)的飞书授权流程$/.exec(text);
  if (match) return `Feishu authorization flow for ${match[1]}`;
  match = /^用于修复(.+)卡片按钮的一次性授权二维码$/.exec(text);
  if (match) return `One-time QR code for repairing card buttons for ${match[1]}`;
  match = /^用于为(.+)开通群消息权限的一次性授权二维码$/.exec(text);
  if (match) return `One-time QR code for granting group-message permission to ${match[1]}`;
  match = /^正在修复「(.+)」$/.exec(text);
  if (match) return `Repairing \u201C${match[1]}\u201D`;
  match = /^正在为「(.+)」开通群消息权限$/.exec(text);
  if (match) return `Granting group-message permission to \u201C${match[1]}\u201D`;
  match = /^修复(.+)的卡片按钮$/.exec(text);
  if (match) return `Repair card buttons for ${match[1]}`;
  match = /^(.+)的修复二维码已生成，请使用飞书扫码。$/.exec(text);
  if (match) return `Repair QR code generated for ${match[1]}. Scan it with Feishu.`;
  match = /^(.+)的群消息权限二维码已生成，请使用飞书确认。$/.exec(text);
  if (match) return `Group-message permission QR code generated for ${match[1]}. Confirm it with Feishu.`;
  match = /^(.+)的卡片按钮已修复。$/.exec(text);
  if (match) return `Card buttons repaired for ${match[1]}.`;
  match = /^(.+)已开通群消息权限，并启用“响应所有群消息”。$/.exec(text);
  if (match) return `${match[1]} now has group-message permission and \u201CRespond to all group messages\u201D is enabled.`;
  match = /^(检查连接|重试连接)(.+)$/.exec(text);
  if (match) return `${localizeText(match[1])} ${match[2]}`;
  match = /^移除(.+)$/.exec(text);
  if (match) return `Remove ${match[1]}`;
  match = /^这会停止消息连接，并删除本机保存的 (.+)、机器人配置及会话映射。(.+)中的机器人不会被自动删除。$/.exec(text);
  if (match) {
    return `This stops the message connection and removes the locally stored ${localizeText(match[1])}, bot configuration, and session mappings. The bot in ${localizeText(match[2])} is not deleted.`;
  }
  match = /^二维码剩余 (.+)$/.exec(text);
  if (match) return `QR code expires in ${match[1]}`;
  match = /^最近一条消息处理失败：(.+)$/.exec(text);
  if (match) return `Latest message failed: ${localizeText(match[1])}`;
  match = /^图片下载失败（HTTP (.+)），请重新发送后再试。$/.exec(text);
  if (match) return `The image download failed (HTTP ${match[1]}). Send it again.`;
  match = /^一次最多只能处理 (\d+) 张图片。$/.exec(text);
  if (match) return `A message can contain at most ${match[1]} images.`;
  match = /^状态刷新失败：(.+)$/.exec(text);
  if (match) return `Status refresh failed: ${match[1]}`;
  match = /^状态自动刷新失败：(.+)$/.exec(text);
  if (match) return `Automatic status refresh failed: ${match[1]}`;
  match = /^操作失败：(.+)$/.exec(text);
  if (match) return `Operation failed: ${match[1]}`;
  match = /^连接检查失败：(.+)$/.exec(text);
  if (match) return `Connection check failed: ${match[1]}`;
  match = /^移除失败：(.+)$/.exec(text);
  if (match) return `Removal failed: ${match[1]}`;
  const phrases = [
    ["\u4F01\u4E1A\u5FAE\u4FE1", "WeCom"],
    ["DeepSeek Harness", "DeepSeek Harness"],
    ["WhatsApp", "WhatsApp"],
    ["Telegram", "Telegram"],
    ["Discord", "Discord"],
    ["Slack", "Slack"],
    ["\u98DE\u4E66", "Feishu"],
    ["\u9489\u9489", "DingTalk"],
    ["\u5FAE\u4FE1", "WeChat"],
    ["\u673A\u5668\u4EBA", "bot"],
    ["\u8D26\u53F7", "account"],
    ["\u5E94\u7528", "app"],
    ["\u51ED\u636E", "credentials"],
    ["\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u54CD\u5E94", "service returned an unrecognized response"],
    ["\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u673A\u5668\u4EBA\u5217\u8868", "service did not return a valid bot list"],
    ["\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5", "operation failed; try again later"],
    ["\u64CD\u4F5C\u5931\u8D25", "operation failed"],
    ["\u8FDE\u63A5\u5C1A\u672A\u5C31\u7EEA", "connection is not ready"],
    ["\u6CA1\u6709\u63A5\u5165\u5B8C\u6210", "was not connected"],
    ["\u6CA1\u6709\u7ED1\u5B9A\u5B8C\u6210", "was not connected"],
    ["\u8BBE\u7F6E\u9875\u7F3A\u5C11 RPC \u8FDE\u63A5", "settings are missing an RPC connection"],
    ["\u8BBE\u7F6E", "settings"],
    ["\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210", "connection check completed"],
    ["\u4ECD\u672A\u8FDE\u63A5\uFF0C\u63D2\u4EF6\u4F1A\u7EE7\u7EED\u81EA\u52A8\u91CD\u8BD5", "is still offline; the plugin will keep retrying"],
    ["\u5DF2\u91CD\u65B0\u8FDE\u63A5", "reconnected"],
    ["\u79FB\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "could not be removed; try again"],
    ["\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5F00\u59CB\u804A\u5929", "is connected and ready to chat"],
    ["\u5DF2\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u5F00\u59CB\u53D1\u9001\u6D88\u606F", "is connected and ready for messages"],
    ["\u670D\u52A1\u8BF7\u6C42\u5931\u8D25", "service request failed"],
    ["\u8FDE\u63A5\u9047\u5230\u95EE\u9898", "connection encountered a problem"],
    ["\u6B63\u5728\u8BFB\u53D6", "Loading "],
    ["\u8FDE\u63A5\u72B6\u6001", "connection status"],
    ["\u4E8C\u7EF4\u7801", "QR code"]
  ];
  let output = text;
  for (const [source, target] of phrases) output = output.replaceAll(source, target);
  return output;
}
function localizeText(value) {
  if (typeof value !== "string") return value;
  const exact = translate(value);
  if (exact !== value || !isEnglish()) return exact;
  return translateDynamic(value);
}
var LOCALIZED_PROPS = Object.freeze([
  "aria-label",
  "alt",
  "placeholder",
  "title"
]);
function localizeChild(child) {
  if (typeof child === "string") return localizeText(child);
  if (Array.isArray(child)) return child.map(localizeChild);
  return child;
}
function h2(type, props, ...children) {
  let localizedProps = props;
  if (props) {
    for (const key of LOCALIZED_PROPS) {
      if (typeof props[key] === "string") {
        localizedProps = localizedProps === props ? { ...props } : localizedProps;
        localizedProps[key] = localizeText(props[key]);
      }
    }
  }
  return React2.createElement(type, localizedProps, ...children.map(localizeChild));
}

// plugin-src/client/credential-binding.js
function ActionIcon({ children }) {
  return h2("svg", {
    className: "dim-actionIcon",
    width: 15,
    height: 15,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false"
  }, children);
}
function QrActionIcon() {
  return h2(
    ActionIcon,
    null,
    h2("path", {
      d: "M2.5 2.5h5v5h-5v-5Zm10 0h5v5h-5v-5Zm-10 10h5v5h-5v-5Z",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }),
    h2("path", {
      d: "M11.5 11.5h2v2h-2v-2Zm4 0h2v3h-2v-3Zm-4 4h3v2h-3v-2Zm5 1h1v1h-1v-1Z",
      fill: "currentColor"
    })
  );
}

// plugin-src/client/agent-preset.js
var React4 = __toESM(require("react"), 1);
var SET_AGENT_PRESET_ENDPOINT = "bot.preset.set";
var PRESET_ID = /^[a-z0-9][a-z0-9-]*$/;
var EMPTY_AGENT_PRESET_CATALOG = Object.freeze({
  defaultId: "",
  items: Object.freeze([])
});
var AgentPresetCatalogContext = React4.createContext(EMPTY_AGENT_PRESET_CATALOG);
function normalizeAgentPresetId(value) {
  if (typeof value !== "string") return "";
  const id = value.trim();
  return PRESET_ID.test(id) ? id : "";
}
function normalizeAgentPresetCatalog(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { defaultId: "", items: [] };
  }
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  for (const entry of Array.isArray(value.items) ? value.items : []) {
    const id = typeof entry === "string" ? normalizeAgentPresetId(entry) : normalizeAgentPresetId(entry?.id);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const label = typeof entry?.label === "string" && entry.label.trim() ? entry.label.trim().slice(0, 128) : typeof entry?.name === "string" && entry.name.trim() ? entry.name.trim().slice(0, 128) : id;
    items.push({ id, label });
  }
  return {
    defaultId: normalizeAgentPresetId(value.defaultId),
    items
  };
}
function AgentPresetEditor({ agentPreset = "", disabled = false, onSave }) {
  const catalog = React4.useContext(AgentPresetCatalogContext) ?? EMPTY_AGENT_PRESET_CATALOG;
  const helpId = React4.useId();
  const current = normalizeAgentPresetId(agentPreset);
  const [saving, setSaving] = React4.useState(false);
  const [error, setError] = React4.useState(null);
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of Array.isArray(catalog.items) ? catalog.items : []) {
    if (!item?.id || seen.has(item.id)) continue;
    seen.add(item.id);
    items.push(item);
  }
  const currentUnavailable = Boolean(current && !seen.has(current));
  if (currentUnavailable) items.push({ id: current, label: current, unavailable: true });
  const inheritLabel = "\u8DDF\u968F Host \u9ED8\u8BA4";
  const change = async (event) => {
    const next = event.target.value;
    if (next === current || saving || disabled) return;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(next || null);
    } catch (cause) {
      setError(cause?.message ?? "Agent Preset \u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
    } finally {
      setSaving(false);
    }
  };
  return h2(
    "div",
    { className: "dim-preset" },
    h2(
      "div",
      { className: "dim-presetHeader" },
      h2(
        "span",
        { className: "dim-presetTitle" },
        h2("span", null, "Agent Preset"),
        h2(
          "span",
          { className: "dim-presetHelp" },
          h2("button", {
            type: "button",
            className: "dim-presetHelpButton",
            "aria-label": "\u67E5\u770B Agent Preset \u8BF4\u660E",
            "aria-describedby": helpId
          }, h2("span", { "aria-hidden": "true" }, "?")),
          h2("span", {
            id: helpId,
            className: "dim-presetTooltip",
            role: "tooltip"
          }, "\u53EA\u5F71\u54CD\u65B0\u5EFA\u4F1A\u8BDD\uFF1B\u82E5\u5F53\u524D\u804A\u5929\u5DF2\u6709\u4F1A\u8BDD\uFF0C\u5148\u53D1\u9001 /new\uFF0C\u518D\u53D1\u9001\u666E\u901A\u6D88\u606F\u751F\u6548\u3002")
        )
      ),
      saving ? h2("span", { className: "dim-presetStatus" }, "\u4FDD\u5B58\u4E2D\u2026") : null
    ),
    React4.createElement(
      "select",
      {
        className: "dim-presetSelect",
        value: current,
        disabled: disabled || saving,
        "aria-label": "Agent Preset",
        onChange: (event) => {
          void change(event);
        }
      },
      h2("option", { value: "" }, inheritLabel),
      ...items.map((item) => h2(
        "option",
        { key: item.id, value: item.id },
        item.unavailable ? [item.id, "\uFF08\u5DF2\u4E0D\u53EF\u7528\uFF09"] : item.label && item.label !== item.id ? `${item.label}\uFF08${item.id}\uFF09` : item.id
      ))
    ),
    error || currentUnavailable ? h2(
      "p",
      { className: "dim-presetError", role: error ? "alert" : "status" },
      error ?? "\u5F53\u524D Agent Preset \u5DF2\u4E0D\u53EF\u7528\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6 Preset \u6216\u8DDF\u968F Host \u9ED8\u8BA4\u3002"
    ) : null
  );
}

// plugin-src/client/channels/weixin/api.js
var WEIXIN_RPC_CHANNEL = "/weixin";
var WEIXIN_ENDPOINTS = Object.freeze({
  status: "connection.status",
  beginProvisioning: "provision.begin",
  pollProvisioning: "provision.poll",
  submitVerification: "provision.verify",
  cancelProvisioning: "provision.cancel",
  reconnectBot: "bot.reconnect",
  deleteBot: "bot.delete",
  setWorkspace: "bot.workspace.set",
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT
});
var ACCOUNT_STATES = /* @__PURE__ */ new Set(["connected", "connecting", "offline", "error"]);
var PROVISION_STATES = /* @__PURE__ */ new Set([
  "starting",
  "pending",
  "scanned",
  "needs_verification",
  "connecting",
  "connected",
  "expired",
  "failed",
  "cancelled"
]);
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function string(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}
function timestamp(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function normalizeTestMessage(value) {
  if (!isRecord(value)) return null;
  if (value.sent === true) return { sent: true };
  if (value.sent !== false) return null;
  const code = value.code === "test-target-unavailable" ? "test-target-unavailable" : "test-message-failed";
  return { sent: false, code };
}
function normalizeMessageError(value) {
  if (!isRecord(value)) return null;
  const code = string(value.code).slice(0, 64);
  const reason = string(value.reason).slice(0, 128);
  const message = string(value.message).slice(0, 500);
  const at = timestamp(value.at);
  return code && reason && message && at !== null ? { code, reason, message, at } : null;
}
function unwrapRpcResult(result) {
  if (!isRecord(result) || typeof result.ok !== "boolean") {
    throw new Error("\u5FAE\u4FE1\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u54CD\u5E94");
  }
  if (!result.ok) {
    const error = new Error(string(result.error?.message, "\u5FAE\u4FE1\u64CD\u4F5C\u5931\u8D25"));
    error.code = string(result.error?.code, "WEIXIN_RPC_ERROR");
    throw error;
  }
  return result.value;
}
function safeQrSource(value) {
  return typeof value === "string" && /^data:image\/(?:png|webp|svg\+xml)(?:;charset=[^;,]+)?;base64,/i.test(value) ? value : void 0;
}
function safeVerificationUrl(value) {
  if (typeof value !== "string") return void 0;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    return url.protocol === "https:" && (host === "weixin.qq.com" || host.endsWith(".weixin.qq.com")) ? url.toString() : void 0;
  } catch {
    return void 0;
  }
}
function normalizeProvisioning(value) {
  if (!isRecord(value) || !string(value.attemptId)) {
    throw new Error("\u5FAE\u4FE1\u626B\u7801\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u7ED1\u5B9A\u4EFB\u52A1");
  }
  const status = PROVISION_STATES.has(value.status) ? value.status : "failed";
  const result = {
    attemptId: string(value.attemptId),
    status,
    expiresAt: timestamp(value.expiresAt) ?? Date.now(),
    pollIntervalMs: Math.min(5e3, Math.max(500, Number(value.pollIntervalMs) || 1e3)),
    verificationRequired: value.verificationRequired === true || status === "needs_verification"
  };
  const verificationUrl = safeVerificationUrl(value.verificationUrl);
  const qrCodeDataUrl = safeQrSource(value.qrCodeDataUrl);
  if (verificationUrl) result.verificationUrl = verificationUrl;
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (string(value.botId)) result.botId = string(value.botId);
  if (value.alreadyConnected === true) result.alreadyConnected = true;
  if (isRecord(value.error)) {
    result.error = {
      code: string(value.error.code, "WEIXIN_PROVISION_FAILED"),
      message: string(value.error.message, "\u5FAE\u4FE1\u7ED1\u5B9A\u6CA1\u6709\u5B8C\u6210")
    };
  }
  return result;
}
function normalizeBot(value) {
  if (!isRecord(value) || !string(value.botId) || !isRecord(value.bot)) return null;
  const state = ACCOUNT_STATES.has(value.state) ? value.state : "error";
  const connected = value.connected === true;
  return {
    botId: string(value.botId),
    state: connected ? "connected" : state,
    connected,
    configured: value.configured === true,
    workspace: string(value.workspace).slice(0, 4096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: string(value.bot.name, "\u5FAE\u4FE1\u673A\u5668\u4EBA"),
      accountIdMasked: string(value.bot.accountIdMasked, "\u5DF2\u5B89\u5168\u4FDD\u5B58")
    },
    health: {
      status: string(value.health?.status, connected ? "healthy" : "offline"),
      summary: string(value.health?.summary, connected ? "\u5FAE\u4FE1\u8FDE\u63A5\u6B63\u5E38" : "\u5FAE\u4FE1\u8FDE\u63A5\u672A\u5C31\u7EEA"),
      lastCheckedAt: timestamp(value.health?.lastCheckedAt)
    },
    stats: {
      messagesReceived: Math.max(0, Number(value.stats?.messagesReceived) || 0),
      messagesReplied: Math.max(0, Number(value.stats?.messagesReplied) || 0)
    },
    lastMessageError: normalizeMessageError(value.lastMessageError),
    error: isRecord(value.error) ? {
      code: string(value.error.code, "WEIXIN_ACCOUNT_ERROR"),
      message: string(value.error.message, "\u5FAE\u4FE1\u8FDE\u63A5\u672A\u5C31\u7EEA")
    } : null
  };
}
function normalizeSnapshot(value) {
  if (!isRecord(value) || !Array.isArray(value.bots)) {
    throw new Error("\u5FAE\u4FE1\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u6709\u6548\u7684\u8D26\u53F7\u5217\u8868");
  }
  const bots = value.bots.map(normalizeBot).filter(Boolean);
  return {
    schemaVersion: Number(value.schemaVersion) || 1,
    revision: Number(value.revision) || 0,
    state: string(value.state, "offline"),
    bots,
    totals: {
      configured: bots.length,
      connected: bots.filter((bot) => bot.connected).length
    },
    provisioning: value.provisioning ? normalizeProvisioning(value.provisioning) : null,
    testMessage: normalizeTestMessage(value.testMessage),
    agentPresetCatalog: normalizeAgentPresetCatalog(value.agentPresetCatalog)
  };
}
function presentError(error) {
  return {
    code: string(error?.code, "WEIXIN_ERROR"),
    message: string(error?.message, "\u5FAE\u4FE1\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")
  };
}
function formatRemaining(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1e3));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// plugin-src/client/lifecycle.js
var React5 = __toESM(require("react"), 1);
function createPollScheduler({ setTimeoutFn, clearTimeoutFn }) {
  let disposed = false;
  let timer;
  return {
    get disposed() {
      return disposed;
    },
    schedule(callback, delayMs) {
      if (disposed) return false;
      if (timer !== void 0) clearTimeoutFn(timer);
      timer = setTimeoutFn(() => {
        timer = void 0;
        if (!disposed) void callback();
      }, delayMs);
      return true;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (timer !== void 0) clearTimeoutFn(timer);
      timer = void 0;
    }
  };
}
function createAnimationFrameScheduler({ requestFrame, cancelFrame }) {
  let disposed = false;
  const frames = /* @__PURE__ */ new Set();
  const keyedFrames = /* @__PURE__ */ new Map();
  return {
    schedule(callback, key) {
      if (disposed) return false;
      const previous = key === void 0 ? void 0 : keyedFrames.get(key);
      if (previous !== void 0) {
        keyedFrames.delete(key);
        frames.delete(previous);
        cancelFrame(previous);
      }
      let frame;
      let completed = false;
      frame = requestFrame(() => {
        completed = true;
        if (frame !== void 0) frames.delete(frame);
        if (key !== void 0 && keyedFrames.get(key) === frame) keyedFrames.delete(key);
        if (!disposed) callback();
      });
      if (!completed) {
        frames.add(frame);
        if (key !== void 0) keyedFrames.set(key, frame);
      }
      return true;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const frame of frames) cancelFrame(frame);
      frames.clear();
      keyedFrames.clear();
    }
  };
}
function useAnimationFrameScheduler() {
  const schedulerRef = React5.useRef(null);
  React5.useEffect(() => {
    const scheduler = createAnimationFrameScheduler({
      requestFrame: (callback) => window.requestAnimationFrame(callback),
      cancelFrame: (frame) => window.cancelAnimationFrame(frame)
    });
    schedulerRef.current = scheduler;
    return () => {
      scheduler.dispose();
      if (schedulerRef.current === scheduler) schedulerRef.current = null;
    };
  }, []);
  return React5.useCallback(
    (callback, key) => schedulerRef.current?.schedule(callback, key) ?? false,
    []
  );
}

// plugin-src/client/workspace-editor.js
var React7 = __toESM(require("react"), 1);

// plugin-src/client/workspace-directory-picker.js
var React6 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
function pickerErrorCode(error) {
  return error?.rpcError?.code ?? error?.code;
}
function pickerErrorDetails(error) {
  return error?.rpcError?.details ?? error?.details;
}
function pickerErrorMessage(error) {
  return error?.rpcError?.message ?? error?.message ?? "\u65E0\u6CD5\u8BFB\u53D6\u76EE\u5F55\uFF0C\u8BF7\u91CD\u8BD5\u3002";
}
function FolderIcon() {
  return React6.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    },
    React6.createElement("path", { d: "M3.5 7.25A2.25 2.25 0 0 1 5.75 5h4.1l1.8 2h6.6a2.25 2.25 0 0 1 2.25 2.25v7A2.75 2.75 0 0 1 17.75 19h-12A2.25 2.25 0 0 1 3.5 16.75v-9.5Z" })
  );
}
function ChevronIcon() {
  return React6.createElement("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, React6.createElement("path", { d: "m7.5 4.5 5 5.5-5 5.5" }));
}
function displayCrumbs(listing) {
  const homeIndex = listing.crumbs.findIndex((crumb) => crumb.path === listing.home);
  if (homeIndex < 0) return listing.crumbs;
  return listing.crumbs.slice(homeIndex);
}
function WorkspaceDirectoryPicker({
  open,
  startPath,
  picker,
  busy = false,
  saveError = null,
  onPicked,
  onCancel
}) {
  const [listing, setListing] = React6.useState(null);
  const [loading, setLoading] = React6.useState(false);
  const [error, setError] = React6.useState(null);
  const [showHidden, setShowHidden] = React6.useState(false);
  const [retryKey, setRetryKey] = React6.useState(0);
  const requestRef = React6.useRef(0);
  const controllerRef = React6.useRef(null);
  const dialogRef = React6.useRef(null);
  const bodyRef = React6.useRef(null);
  const titleId = React6.useId();
  const noticeId = React6.useId();
  const initialPathRef = React6.useRef(startPath);
  const onPickedRef = React6.useRef(onPicked);
  const onCancelRef = React6.useRef(onCancel);
  const busyRef = React6.useRef(busy);
  onPickedRef.current = onPicked;
  onCancelRef.current = onCancel;
  busyRef.current = busy;
  const loadDirectory = React6.useCallback(async (path, { reportError = true } = {}) => {
    const request = requestRef.current + 1;
    requestRef.current = request;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setLoading(true);
    if (reportError) setError(null);
    try {
      const next = await picker.listDirectory(path, controller.signal);
      if (request !== requestRef.current || controller.signal.aborted) return { aborted: true };
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
      setListing(next);
      setError(null);
      return { value: next };
    } catch (cause) {
      if (request !== requestRef.current || controller.signal.aborted) return { aborted: true };
      if (reportError) setError(pickerErrorMessage(cause));
      return { error: cause };
    } finally {
      if (request === requestRef.current) setLoading(false);
    }
  }, [picker]);
  React6.useEffect(() => {
    if (!open) return void 0;
    let active = true;
    setListing(null);
    setError(null);
    setShowHidden(false);
    dialogRef.current?.focus?.();
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !busyRef.current) onCancelRef.current?.();
    };
    if (typeof document !== "undefined") document.addEventListener("keydown", handleKeyDown);
    const start = async () => {
      const initialPath = initialPathRef.current;
      const initial = await loadDirectory(initialPath || void 0, { reportError: false });
      if (!active || initial.aborted || initial.value) return;
      const code = pickerErrorCode(initial.error);
      const details = pickerErrorDetails(initial.error);
      if (code === "directory-picker-unavailable" && details?.capability === "native" && typeof picker.pickDirectory === "function") {
        setLoading(true);
        try {
          const selected = await picker.pickDirectory();
          if (!active) return;
          if (selected !== null) await onPickedRef.current?.(selected);
          else onCancelRef.current?.();
        } catch (cause) {
          if (active) setError(pickerErrorMessage(cause));
        } finally {
          if (active) setLoading(false);
        }
        return;
      }
      if (initialPath && code === "directory-unreadable") {
        const home = await loadDirectory(void 0, { reportError: false });
        if (!active || home.aborted || home.value) return;
        setError(pickerErrorMessage(home.error));
        return;
      }
      setError(pickerErrorMessage(initial.error));
    };
    void start();
    return () => {
      active = false;
      if (typeof document !== "undefined") document.removeEventListener("keydown", handleKeyDown);
      requestRef.current += 1;
      controllerRef.current?.abort();
    };
  }, [loadDirectory, open, picker, retryKey]);
  if (!open) return null;
  const entries = (listing?.entries ?? []).filter((entry) => showHidden || !entry.hidden);
  const crumbs = listing ? displayCrumbs(listing) : [];
  const presentedError = saveError ?? error;
  const content = h2(
    "div",
    {
      className: "dim-directoryPickerBackdrop",
      onMouseDown: (event) => {
        if (event.target === event.currentTarget && !busy) onCancel();
      }
    },
    h2(
      "section",
      {
        ref: dialogRef,
        className: "dim-directoryPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": titleId,
        "aria-describedby": noticeId,
        tabIndex: -1
      },
      h2(
        "header",
        { className: "dim-directoryPickerHeader" },
        h2("h3", { id: titleId }, "\u9009\u62E9\u673A\u5668\u4EBA\u5DE5\u4F5C\u533A\u76EE\u5F55"),
        listing ? h2(
          "nav",
          { className: "dim-directoryCrumbs", "aria-label": "\u5F53\u524D\u76EE\u5F55" },
          crumbs.map((crumb, index) => h2(
            React6.Fragment,
            { key: crumb.path },
            index > 0 ? h2("span", { className: "dim-directoryCrumbSeparator", "aria-hidden": "true" }, "\u203A") : null,
            React6.createElement("button", {
              type: "button",
              title: crumb.path,
              disabled: loading || busy,
              "aria-current": index === crumbs.length - 1 ? "page" : void 0,
              onClick: () => void loadDirectory(crumb.path)
            }, crumb.path === listing.home ? h2("span", null, "\u4E3B\u76EE\u5F55") : crumb.name || crumb.path)
          ))
        ) : h2("p", null, "\u6B63\u5728\u51C6\u5907\u76EE\u5F55\u9009\u62E9\u5668\u2026")
      ),
      h2(
        "div",
        { ref: bodyRef, className: "dim-directoryPickerBody", "aria-busy": loading },
        loading && !listing ? h2(
          "div",
          { className: "dim-directoryPickerState" },
          h2("span", { className: "dim-directoryPickerSpinner", "aria-hidden": "true" }),
          h2("p", null, "\u6B63\u5728\u8BFB\u53D6\u76EE\u5F55\u2026")
        ) : listing ? entries.length > 0 ? h2("ul", { className: "dim-directoryList" }, entries.map((entry) => h2(
          "li",
          { key: entry.path },
          React6.createElement(
            "button",
            {
              type: "button",
              title: entry.path,
              disabled: loading || busy,
              onClick: () => void loadDirectory(entry.path)
            },
            h2("span", { className: "dim-directoryFolder" }, h2(FolderIcon)),
            React6.createElement("span", { className: "dim-directoryName" }, entry.name),
            h2("span", { className: "dim-directoryChevron" }, h2(ChevronIcon))
          )
        ))) : h2(
          "div",
          { className: "dim-directoryPickerState" },
          h2("p", null, "\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u6CA1\u6709\u5B50\u6587\u4EF6\u5939\u3002")
        ) : null,
        listing?.truncated ? h2("p", { className: "dim-directoryPickerTruncated" }, "\u6B64\u76EE\u5F55\u7684\u5B50\u6587\u4EF6\u5939\u8FC7\u591A\uFF0C\u4EC5\u663E\u793A\u524D\u4E00\u90E8\u5206\u3002") : null,
        presentedError ? h2(
          "div",
          { className: "dim-directoryPickerError", role: "alert" },
          h2("span", null, presentedError),
          !listing && !busy ? h2("button", {
            type: "button",
            onClick: () => setRetryKey((value) => value + 1)
          }, "\u91CD\u8BD5") : null
        ) : null
      ),
      h2(
        "footer",
        { className: "dim-directoryPickerFooter" },
        h2(
          "button",
          {
            type: "button",
            className: "dim-directoryHidden",
            "aria-pressed": showHidden,
            onClick: () => setShowHidden((value) => !value),
            disabled: busy || !listing
          },
          h2("span", { className: "dim-directoryHiddenBox", "aria-hidden": "true" }),
          h2("span", null, "\u663E\u793A\u9690\u85CF\u6587\u4EF6\u5939")
        ),
        h2("p", { id: noticeId, className: "dim-directoryPickerNotice" }, "\u5207\u6362\u540E\u4F1A\u6E05\u9664\u8FD9\u4E2A\u673A\u5668\u4EBA\u7684\u65E7\u4F1A\u8BDD\u6620\u5C04\u3002"),
        h2(
          "div",
          { className: "dim-directoryPickerActions" },
          h2("button", { type: "button", onClick: onCancel, disabled: busy }, "\u53D6\u6D88"),
          h2("button", {
            type: "button",
            className: "dim-directoryPickerPrimary",
            disabled: busy || loading || !listing,
            onClick: () => listing && void onPicked(listing.path)
          }, busy ? "\u5207\u6362\u4E2D\u2026" : "\u9009\u62E9\u6B64\u76EE\u5F55")
        )
      )
    )
  );
  return typeof document === "undefined" ? content : (0, import_react_dom.createPortal)(content, document.body);
}

// plugin-src/client/workspace-editor.js
var WorkspaceDirectoryPickerContext = React7.createContext(null);
function WorkspaceEditor({ workspace, directoryPicker, disabled = false, onSave }) {
  const sharedDirectoryPicker = React7.useContext(WorkspaceDirectoryPickerContext);
  const activeDirectoryPicker = directoryPicker ?? sharedDirectoryPicker;
  const [open, setOpen] = React7.useState(false);
  const [saving, setSaving] = React7.useState(false);
  const [error, setError] = React7.useState(null);
  const editButtonRef = React7.useRef(null);
  const savingRef = React7.useRef(false);
  const close = React7.useCallback(() => {
    setOpen(false);
    setError(null);
    queueMicrotask(() => editButtonRef.current?.focus?.());
  }, []);
  const pick = React7.useCallback(async (value) => {
    if (!value || savingRef.current || disabled) return;
    if (value === workspace) {
      close();
      return;
    }
    savingRef.current = true;
    setSaving(true);
    setError(null);
    try {
      await onSave?.(value);
      close();
    } catch (cause) {
      setError(cause?.message ?? "\u5DE5\u4F5C\u533A\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }, [close, disabled, onSave, workspace]);
  return h2(
    "div",
    { className: "dim-workspace" },
    h2(
      "div",
      { className: "dim-workspaceHeader" },
      h2("span", null, "\u5F53\u524D\u5DE5\u4F5C\u533A"),
      h2("button", {
        type: "button",
        ref: editButtonRef,
        className: "dim-workspaceEdit",
        onClick: () => {
          setOpen(true);
          setError(null);
        },
        disabled: disabled || !activeDirectoryPicker
      }, "\u9009\u62E9\u76EE\u5F55")
    ),
    workspace ? React7.createElement("code", {
      className: "dim-workspacePath",
      title: workspace
    }, workspace) : h2("code", { className: "dim-workspacePath" }, "\u672A\u8BBE\u7F6E"),
    open ? h2(WorkspaceDirectoryPicker, {
      open,
      startPath: workspace,
      picker: activeDirectoryPicker,
      busy: saving || disabled,
      saveError: error,
      onPicked: pick,
      onCancel: close
    }) : null
  );
}

// plugin-src/client/workspace-snapshot-fence.js
var React8 = __toESM(require("react"), 1);
function useWorkspaceSnapshotFence() {
  const state = React8.useRef({ version: 0, pendingMutations: 0 });
  return React8.useMemo(() => Object.freeze({
    beginStatus() {
      return state.current.pendingMutations === 0 ? state.current.version : null;
    },
    canCommitStatus(version) {
      return version !== null && state.current.pendingMutations === 0 && state.current.version === version;
    },
    beginMutation() {
      state.current.pendingMutations += 1;
      state.current.version += 1;
      return state.current.version;
    },
    canCommitMutation(version) {
      return state.current.version === version;
    },
    endMutation() {
      state.current.pendingMutations = Math.max(0, state.current.pendingMutations - 1);
      return state.current.pendingMutations === 0;
    }
  }), []);
}

// plugin-src/client/channel-card-meta.js
var React9 = __toESM(require("react"), 1);
function ChannelListHeading({ className = "", id, title, connectionLabel }) {
  const helpId = React9.useId();
  return h2(
    "div",
    { className: `${className} dim-listHeading`.trim() },
    h2(
      "div",
      { className: "dim-listTitle" },
      h2("h3", id ? { id } : null, title),
      h2(
        "span",
        { className: "dim-channelHelp" },
        h2("button", {
          type: "button",
          className: "dim-channelHelpButton",
          "aria-label": "\u67E5\u770B\u6D88\u606F\u901A\u9053\u8BF4\u660E",
          "aria-describedby": helpId
        }, h2("span", { "aria-hidden": "true" }, "?")),
        h2(
          "span",
          {
            id: helpId,
            className: "dim-channelTooltip",
            role: "tooltip"
          },
          h2("span", null, "\u6D88\u606F\u901A\u9053"),
          h2("strong", null, connectionLabel)
        )
      )
    )
  );
}
function BotStatusMeta({
  className = "",
  dotClassName = "",
  tone,
  stateLabel,
  lastCheckedAt,
  formatCheckedTime,
  healthState
}) {
  return h2(
    "div",
    { className: "dim-botHealthGroup" },
    h2(
      "div",
      {
        className: `${className} dim-botHealth`.trim(),
        ...healthState ? { "data-health": healthState } : {}
      },
      h2("span", {
        className: `${dotClassName} dim-healthDot`.trim(),
        "data-tone": tone
      }),
      h2("span", null, stateLabel)
    ),
    h2(
      "div",
      { className: "dim-lastChecked" },
      h2("span", null, "\u6700\u8FD1\u68C0\u67E5"),
      h2("span", null, formatCheckedTime(lastCheckedAt))
    )
  );
}

// plugin-src/client/channels/weixin/styles.js
var WEIXIN_STYLE_ID = "xmanrui-dsh-weixin-settings";
var CSS = String.raw`
.dxw-page {
  --dxw-accent: #07c160;
  --dxw-accent-dark: #05994c;
  --dxw-success: var(--dsw-alias-state-success-primary, #20a162);
  --dxw-warning: var(--dsw-alias-state-warn-primary, #d97706);
  --dxw-error: var(--dsw-alias-state-error-primary, #d54941);
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 2px 0 28px;
  color: var(--dsw-alias-label-primary, #1f2329);
  box-sizing: border-box;
}
.dxw-page *, .dxw-page *::before, .dxw-page *::after { box-sizing: border-box; }
.dxw-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
.dxw-heading h2, .dxw-heading p, .dxw-card h3, .dxw-card p { margin: 0; }
.dxw-eyebrow { color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; font-weight: 650; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 3px; }
.dxw-heading h2 { font-size: 20px; line-height: 28px; font-weight: 680; }
.dxw-heading p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 20px; margin-top: 5px; white-space: nowrap; }
.dxw-tools, .dxw-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }
.dxw-tools { width: 100%; justify-content: space-between; flex-wrap: nowrap; }
.dxw-badge { display: inline-flex; align-items: center; gap: 7px; min-height: 30px; padding: 0 11px; border-radius: 999px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f2f3f5); font-size: 12px; white-space: nowrap; }
.dxw-dot { width: 8px; height: 8px; border-radius: 50%; background: #aeb3bb; flex: none; }
.dxw-dot[data-tone="success"] { background: var(--dxw-success); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dxw-success) 14%, transparent); }
.dxw-dot[data-tone="warning"] { background: var(--dxw-warning); }
.dxw-dot[data-tone="error"] { background: var(--dxw-error); }
.dxw-button { min-height: 34px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; padding: 0 13px; display: inline-flex; align-items: center; justify-content: center; gap: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; cursor: pointer; text-decoration: none; transition: border-color .15s ease, background .15s ease, transform .15s ease; }
.dxw-button:hover:not(:disabled) { border-color: #aeb3bb; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dxw-button:active:not(:disabled) { transform: translateY(1px); }
.dxw-button:focus-visible, .dxw-input:focus-visible { outline: 2px solid color-mix(in srgb, var(--dxw-accent) 70%, white); outline-offset: 2px; }
.dxw-button:disabled { cursor: not-allowed; opacity: .55; }
.dxw-button[data-kind="primary"] { color: white; border-color: var(--dxw-accent); background: var(--dxw-accent); }
.dxw-button[data-kind="primary"]:hover:not(:disabled) { border-color: var(--dxw-accent-dark); background: var(--dxw-accent-dark); }
.dxw-button[data-kind="danger"] { color: var(--dxw-error); }
.dxw-card { overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dxw-cardBody { padding: 24px; }
.dxw-empty { min-height: 230px; display: grid; grid-template-columns: minmax(0, 1fr) 180px; align-items: center; gap: 30px; }
.dxw-empty h3 { font-size: 18px; margin-bottom: 8px; }
.dxw-empty p { max-width: 560px; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dxw-empty .dxw-actions { margin-top: 20px; }
.dxw-logo { width: 110px; height: 110px; display: grid; place-items: center; justify-self: center; border-radius: 28px; color: white; background: var(--dxw-accent); box-shadow: 0 18px 45px rgb(7 193 96 / 22%); }
.dxw-logo svg { width: 62px; height: 62px; }
.dxw-qrLayout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 34px; align-items: center; }
.dxw-qrColumn { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.dxw-qrFrame { position: relative; width: 270px; aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; padding: 10px; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 16px; background: white; }
.dxw-qrFrame img { display: block; width: 100%; height: 100%; object-fit: contain; }
.dxw-qrFallback { padding: 24px; text-align: center; color: #646a73; }
.dxw-expired { position: absolute; inset: 0; display: grid; place-items: center; padding: 30px; color: white; text-align: center; font-weight: 650; background: rgb(31 35 41 / 76%); backdrop-filter: blur(3px); }
.dxw-countdown { width: 270px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.dxw-countdown div { display: flex; justify-content: space-between; margin-bottom: 6px; }
.dxw-progress { height: 4px; overflow: hidden; border-radius: 99px; background: #eef0f3; }
.dxw-progress span { display: block; width: var(--dxw-progress); height: 100%; background: var(--dxw-accent); transition: width .2s linear; }
.dxw-qrCopy h3 { margin: 9px 0 8px; font-size: 18px; }
.dxw-qrCopy > p { color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dxw-steps { margin: 18px 0 22px; padding-left: 22px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 1.9; }
.dxw-stateLabel { display: inline-flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; font-weight: 600; }
.dxw-verify { max-width: 560px; margin: 0 auto; padding: 32px; text-align: center; }
.dxw-verify h3 { margin: 8px 0; font-size: 19px; }
.dxw-verify p { color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.6; }
.dxw-codeRow { display: flex; justify-content: center; gap: 10px; margin: 24px 0 10px; }
.dxw-input { width: 190px; height: 42px; padding: 0 14px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 9px; background: var(--dsw-alias-bg-layer-1, white); color: inherit; font: inherit; font-size: 18px; letter-spacing: .16em; text-align: center; }
.dxw-statusNotice, .dxw-error { display: flex; align-items: center; gap: 10px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--dxw-error) 28%, transparent); border-radius: 10px; color: var(--dxw-error); background: color-mix(in srgb, var(--dxw-error) 7%, transparent); font-size: 13px; }
.dxw-error { align-items: flex-start; flex-direction: column; padding: 22px; }
.dxw-error h3 { font-size: 17px; }
.dxw-errorCode { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 11px; opacity: .8; }
.dxw-listHeading { display: flex; justify-content: space-between; align-items: center; margin: 2px 0 9px; }
.dxw-listHeading h3 { margin: 0; font-size: 14px; }
.dxw-list { display: grid; gap: 12px; margin: 0; padding: 0; list-style: none; }
.dxw-accountTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.dxw-accountIdentity { display: flex; align-items: center; gap: 12px; min-width: 0; }
.dxw-avatar { width: 42px; height: 42px; display: grid; place-items: center; flex: none; border-radius: 12px; color: white; background: var(--dxw-accent); }
.dxw-accountIdentity h3 { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 15px; }
.dxw-accountIdentity p { color: var(--dsw-alias-label-secondary, #646a73); font: 12px ui-monospace, SFMono-Regular, monospace; margin-top: 4px; }
.dxw-health { display: inline-flex; align-items: center; gap: 7px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; white-space: nowrap; }
.dxw-accountFooter { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding-top: 16px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dxw-accountFooter .dxw-actions { flex: none; flex-wrap: nowrap; gap: 8px; margin-top: 0; }
.dxw-accountFooter .dxw-button { flex: none; white-space: nowrap; }
.dxw-summary { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; }
.dxw-confirm { padding: 18px 24px; border-top: 1px solid color-mix(in srgb, var(--dxw-error) 25%, transparent); background: color-mix(in srgb, var(--dxw-error) 5%, transparent); }
.dxw-confirm strong { display: block; font-size: 14px; margin-bottom: 6px; }
.dxw-confirm p { color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 1.55; }
.dxw-confirm .dxw-actions { margin-top: 13px; }
.dxw-loading { padding: 36px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dxw-spinner { width: 24px; height: 24px; margin: 0 auto 12px; border: 3px solid #e6e8eb; border-top-color: var(--dxw-accent); border-radius: 50%; animation: dxw-spin .8s linear infinite; }
.dxw-visuallyHidden { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@keyframes dxw-spin { to { transform: rotate(360deg); } }
@media (max-width: 720px) {
  .dxw-heading, .dxw-accountTop { flex-direction: column; align-items: stretch; }
  .dxw-empty { grid-template-columns: minmax(0, 1fr); }
  .dxw-logo { display: none; }
  .dxw-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; }
  .dxw-qrCopy { width: 100%; }
  .dxw-cardBody { padding: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .dxw-page *, .dxw-page *::before, .dxw-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
`;
function installWeixinStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${WEIXIN_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-weixin";
  style.dataset.pluginCss = WEIXIN_STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/channels/weixin/index.js
var Button = React10.forwardRef(function Button2({ children, kind = "secondary", className = "", ...props }, ref) {
  return h2("button", {
    ...props,
    ref,
    type: "button",
    className: `dxw-button ${className}`.trim(),
    "data-kind": kind
  }, children);
});
function Heading({ totals, adding, busy, onAdd, addButtonRef }) {
  return h2(
    "div",
    { className: "dxw-heading" },
    h2(
      "div",
      { className: "dxw-tools" },
      h2(Button, {
        kind: "primary",
        className: "dim-scanButton",
        onClick: onAdd,
        disabled: adding || busy,
        ref: addButtonRef,
        "aria-label": "\u626B\u7801\u63A5\u5165\u5FAE\u4FE1\u673A\u5668\u4EBA"
      }, h2(QrActionIcon), adding ? "\u6B63\u5728\u63A5\u5165" : "\u626B\u7801\u63A5\u5165\u673A\u5668\u4EBA"),
      totals.configured > 0 ? h2(
        "div",
        { className: "dxw-badge dim-onlineBadge" },
        h2("span", null, `${totals.connected} / ${totals.configured} \u5728\u7EBF`)
      ) : null
    )
  );
}
function LoadingView() {
  return h2(
    "div",
    { className: "dxw-card dxw-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "dxw-spinner dim-spinner" }),
    h2("span", null, "\u6B63\u5728\u8BFB\u53D6\u5FAE\u4FE1\u8FDE\u63A5\u72B6\u6001\u2026")
  );
}
function EmptyView({ onStart, busy }) {
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-cardBody dxw-empty dim-surfaceBody dim-emptyView" },
      h2(
        "div",
        { className: "dim-emptyCopy" },
        h2(
          "div",
          { className: "dxw-stateLabel dim-stateLabel" },
          h2("span", { className: "dxw-dot dim-stateDot" }),
          h2("span", null, "\u5C1A\u672A\u7ED1\u5B9A\u5FAE\u4FE1")
        ),
        h2("h3", null, "\u626B\u4E00\u6B21\u7801\uFF0C\u5C31\u80FD\u5728\u5FAE\u4FE1\u91CC\u4F7F\u7528 Harness"),
        h2("p", null, "\u4E8C\u7EF4\u7801\u7531\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u7B7E\u53D1\u3002\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u5E76\u786E\u8BA4\u540E\uFF0C\u8D26\u53F7\u51ED\u636E\u4F1A\u76F4\u63A5\u5199\u5165 Harness Host\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u6536\u5230 bot_token\u3002"),
        h2(
          "div",
          { className: "dxw-actions dim-viewActions" },
          h2(
            Button,
            { kind: "primary", onClick: onStart, disabled: busy },
            busy ? "\u6B63\u5728\u751F\u6210\u4E8C\u7EF4\u7801\u2026" : "\u751F\u6210\u5FAE\u4FE1\u4E8C\u7EF4\u7801"
          )
        )
      ),
      h2("div", { className: "dxw-logo dim-emptyBrand", "aria-hidden": "true" }, h2(WeixinLogoGlyph, { size: 64 }))
    )
  );
}
function QrPanel({ provision, now, busy, onRefresh, onCancel }) {
  const [imageFailed, setImageFailed] = React10.useState(false);
  const source = safeQrSource(provision.qrCodeDataUrl);
  const href = safeVerificationUrl(provision.verificationUrl);
  const remaining = Math.max(0, provision.expiresAt - now);
  const expired = remaining === 0 || provision.status === "expired";
  const duration = Math.max(1, provision.durationMs ?? 5 * 6e4);
  const progress = Math.round(Math.min(1, remaining / duration) * 100);
  React10.useEffect(() => setImageFailed(false), [source]);
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-cardBody dxw-qrLayout dim-surfaceBody dim-qrLayout" },
      h2(
        "div",
        { className: "dxw-qrColumn dim-qrColumn" },
        h2(
          "div",
          { className: "dxw-qrFrame dim-qrFrame" },
          source && !imageFailed ? h2("img", {
            src: source,
            alt: "\u7528\u4E8E\u628A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7ED1\u5B9A\u5230 DeepSeek Harness \u7684\u4E00\u6B21\u6027\u4E8C\u7EF4\u7801",
            onError: () => setImageFailed(true)
          }) : h2("div", { className: "dxw-qrFallback dim-qrFallback" }, "\u4E8C\u7EF4\u7801\u56FE\u7247\u672A\u5C31\u7EEA\uFF0C\u8BF7\u4F7F\u7528\u5907\u7528\u94FE\u63A5\u3002"),
          expired ? h2("div", { className: "dxw-expired dim-qrExpired" }, "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\n\u8BF7\u91CD\u65B0\u751F\u6210") : null
        ),
        h2(
          "div",
          { className: "dxw-countdown dim-countdown" },
          h2("div", { className: "dim-countdownTop" }, h2("span", null, "\u4E8C\u7EF4\u7801\u6709\u6548\u65F6\u95F4"), h2("strong", null, formatRemaining(remaining))),
          h2(
            "div",
            { className: "dxw-progress dim-progress", "aria-hidden": "true" },
            h2("span", { style: { "--dxw-progress": `${progress}%` } })
          )
        )
      ),
      h2(
        "div",
        { className: "dxw-qrCopy dim-qrCopy" },
        h2(
          "div",
          { className: "dxw-stateLabel dim-stateLabel" },
          h2("span", { className: "dxw-dot dim-stateDot", "data-tone": provision.status === "scanned" ? "success" : "warning" }),
          h2("span", null, provision.status === "scanned" ? "\u5DF2\u626B\u7801\uFF0C\u8BF7\u5728\u624B\u673A\u4E0A\u786E\u8BA4" : "\u7B49\u5F85\u5FAE\u4FE1\u626B\u7801")
        ),
        h2("h3", null, expired ? "\u4E8C\u7EF4\u7801\u5DF2\u5931\u6548" : "\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801"),
        h2("p", null, "\u8BF7\u5728\u624B\u673A\u4E0A\u6838\u5BF9\u5E76\u786E\u8BA4\u6388\u6743\u3002\u90E8\u5206\u8D26\u53F7\u4F1A\u989D\u5916\u663E\u793A\u4E00\u4E2A\u914D\u5BF9\u6570\u5B57\uFF0C\u9875\u9762\u4F1A\u5728\u9700\u8981\u65F6\u63D0\u793A\u8F93\u5165\u3002"),
        h2(
          "ol",
          { className: "dxw-steps dim-steps" },
          h2("li", null, "\u6253\u5F00\u624B\u673A\u5FAE\u4FE1\u5E76\u626B\u63CF\u5DE6\u4FA7\u4E8C\u7EF4\u7801"),
          h2("li", null, "\u5728\u5FAE\u4FE1\u4E2D\u786E\u8BA4\u8FDE\u63A5\u8BE5\u673A\u5668\u4EBA"),
          h2("li", null, "\u4FDD\u6301\u672C\u9875\u6253\u5F00\uFF0C\u7B49\u5F85\u6D88\u606F\u957F\u8F6E\u8BE2\u53D8\u4E3A\u5728\u7EBF")
        ),
        h2(
          "div",
          { className: "dxw-actions dim-viewActions" },
          expired ? h2(Button, { kind: "primary", onClick: onRefresh, disabled: busy }, "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801") : null,
          href ? h2("a", {
            className: "dxw-button",
            href,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "\u6253\u5F00\u5907\u7528\u94FE\u63A5") : null,
          !expired ? h2(Button, { onClick: onRefresh, disabled: busy }, "\u6362\u4E00\u4E2A\u4E8C\u7EF4\u7801") : null,
          h2(Button, { onClick: onCancel, disabled: busy }, "\u53D6\u6D88")
        )
      )
    )
  );
}
function VerificationPanel({ provision, busy, onSubmit, onCancel }) {
  const [code, setCode] = React10.useState("");
  const valid = /^\d{4,8}$/.test(code);
  React10.useEffect(() => setCode(""), [provision.attemptId]);
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "form",
      {
        className: "dxw-verify dim-specialView",
        onSubmit: (event) => {
          event.preventDefault();
          if (valid && !busy) onSubmit(code);
        }
      },
      h2(
        "div",
        { className: "dxw-stateLabel" },
        h2("span", { className: "dxw-dot", "data-tone": "warning" }),
        h2("span", null, "\u9700\u8981\u914D\u5BF9\u7801")
      ),
      h2("h3", null, "\u8F93\u5165\u624B\u673A\u5FAE\u4FE1\u663E\u793A\u7684\u6570\u5B57"),
      h2("p", null, "\u8FD9\u662F\u5FAE\u4FE1\u9644\u52A0\u7684\u5B89\u5168\u786E\u8BA4\u6B65\u9AA4\u3002\u914D\u5BF9\u7801\u53EA\u7528\u4E8E\u672C\u6B21\u626B\u7801\u8F6E\u8BE2\uFF0C\u4E0D\u4F1A\u5199\u5165\u914D\u7F6E\u6216\u65E5\u5FD7\u3002"),
      h2(
        "div",
        { className: "dxw-codeRow" },
        h2("input", {
          className: "dxw-input",
          value: code,
          inputMode: "numeric",
          autoComplete: "one-time-code",
          maxLength: 8,
          "aria-label": "\u5FAE\u4FE1\u914D\u5BF9\u7801",
          onChange: (event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 8)),
          autoFocus: true
        }),
        h2("button", {
          type: "submit",
          className: "dxw-button",
          "data-kind": "primary",
          disabled: !valid || busy
        }, busy ? "\u6B63\u5728\u9A8C\u8BC1\u2026" : "\u7EE7\u7EED\u8FDE\u63A5")
      ),
      h2(Button, { onClick: onCancel, disabled: busy }, "\u53D6\u6D88\u7ED1\u5B9A")
    )
  );
}
function ProgressPanel({ scanned, onCancel, busy }) {
  return h2(
    "div",
    { className: "dxw-card dxw-loading dim-surfaceCard dim-loadingView", "aria-busy": "true" },
    h2("div", { className: "dxw-spinner dim-spinner" }),
    h2("h3", null, scanned ? "\u5FAE\u4FE1\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u542F\u52A8\u6D88\u606F\u8FDE\u63A5" : "\u6B63\u5728\u51C6\u5907\u5FAE\u4FE1\u4E8C\u7EF4\u7801"),
    h2("p", null, scanned ? "\u6B63\u5728\u4FDD\u5B58\u51ED\u636E\u5E76\u9A8C\u8BC1 Harness \u4E0E\u5FAE\u4FE1\u957F\u8F6E\u8BE2\u3002" : "\u6B63\u5728\u8054\u7CFB\u817E\u8BAF\u5FAE\u4FE1 iLink \u670D\u52A1\u3002"),
    onCancel ? h2(
      "div",
      { className: "dxw-actions dim-viewActions", style: { justifyContent: "center", marginTop: 14 } },
      h2(Button, { onClick: onCancel, disabled: busy }, "\u53D6\u6D88")
    ) : null
  );
}
function ProvisionError({ provision, busy, onRetry, onClose }) {
  const error = provision.error ?? { code: "WEIXIN_PROVISION_FAILED", message: "\u5FAE\u4FE1\u7ED1\u5B9A\u6CA1\u6709\u5B8C\u6210" };
  return h2(
    "div",
    { className: "dxw-card dim-surfaceCard" },
    h2(
      "div",
      { className: "dxw-error dim-inlineError", role: "alert" },
      h2("h3", null, provision.status === "expired" ? "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F" : "\u5FAE\u4FE1\u6CA1\u6709\u7ED1\u5B9A\u5B8C\u6210"),
      h2("p", null, error.message),
      h2("span", { className: "dxw-errorCode" }, error.code),
      h2(
        "div",
        { className: "dxw-actions dim-viewActions" },
        h2(Button, { kind: "primary", onClick: onRetry, disabled: busy }, "\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801"),
        h2(Button, { onClick: onClose, disabled: busy }, "\u5173\u95ED")
      )
    )
  );
}
function checkedTime(timestamp2) {
  if (!timestamp2) return "\u5C1A\u672A\u68C0\u67E5";
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date(timestamp2));
  } catch {
    return "\u521A\u521A";
  }
}
function AccountCard({
  account,
  busy,
  feedback,
  removing,
  onReconnect,
  onWorkspaceSave,
  onAgentPresetSave,
  onRequestRemove,
  onConfirmRemove,
  onCancelRemove
}) {
  const state = busy === "reconnect" ? "connecting" : account.state;
  const tone = account.connected ? "success" : state === "error" ? "error" : "warning";
  const summary = account.error?.message ?? (account.connected ? null : account.health.summary);
  return h2(
    "article",
    { className: "dxw-card dim-botCard", tabIndex: -1, "data-bot-id": account.botId },
    h2(
      "div",
      { className: "dxw-cardBody dim-botCardBody" },
      h2(
        "div",
        { className: "dxw-accountTop dim-botCardTop" },
        h2(
          "div",
          { className: "dxw-accountIdentity dim-botIdentity" },
          h2("div", { className: "dxw-avatar dim-botAvatar", "aria-hidden": "true" }, h2(WeixinLogoGlyph, { size: 27 })),
          h2("div", { className: "dim-botName" }, h2("h3", null, account.bot.name), h2("p", null, account.bot.accountIdMasked))
        ),
        h2(BotStatusMeta, {
          className: "dxw-health",
          dotClassName: "dxw-dot",
          tone,
          stateLabel: account.connected ? "\u8FD0\u884C\u6B63\u5E38" : state === "connecting" ? "\u6B63\u5728\u8FDE\u63A5" : "\u8FDE\u63A5\u672A\u5C31\u7EEA",
          lastCheckedAt: account.health.lastCheckedAt,
          formatCheckedTime: checkedTime
        })
      ),
      h2(WorkspaceEditor, {
        workspace: account.workspace,
        disabled: Boolean(busy),
        onSave: onWorkspaceSave
      }),
      h2(AgentPresetEditor, {
        agentPreset: account.agentPreset,
        disabled: Boolean(busy),
        onSave: onAgentPresetSave
      }),
      h2(
        "div",
        { className: "dxw-accountFooter dim-cardFooter" },
        h2(
          "div",
          { className: "dim-cardFooterLayout" },
          h2(
            "div",
            { className: "dxw-actions dim-cardActions" },
            h2(
              Button,
              { className: "dim-cardAction", onClick: onReconnect, disabled: Boolean(busy) },
              busy === "reconnect" ? "\u68C0\u67E5\u4E2D\u2026" : account.connected ? "\u68C0\u67E5\u8FDE\u63A5" : "\u91CD\u8BD5\u8FDE\u63A5"
            ),
            h2(Button, { className: "dim-cardAction", kind: "danger", onClick: onRequestRemove, disabled: Boolean(busy) }, "\u79FB\u9664\u63A5\u5165")
          ),
          summary ? h2("div", { className: "dxw-summary dim-cardSummary" }, summary) : null,
          account.lastMessageError ? h2("div", {
            className: "dxw-summary dim-cardSummary",
            role: "status"
          }, `\u6700\u8FD1\u4E00\u6761\u6D88\u606F\u5904\u7406\u5931\u8D25\uFF1A${account.lastMessageError.message}`) : null,
          feedback ? h2("div", {
            className: "dxw-summary dim-cardFeedback",
            role: "status",
            "aria-live": "polite"
          }, feedback) : null
        )
      )
    ),
    removing ? h2(
      "div",
      { className: "dxw-confirm dim-confirm", role: "alertdialog" },
      h2("strong", null, "\u4ECE\u6B64 Harness \u79FB\u9664\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\uFF1F"),
      h2("p", null, "\u8FD9\u4F1A\u505C\u6B62\u6D88\u606F\u8FDE\u63A5\uFF0C\u5E76\u5220\u9664\u672C\u673A\u4FDD\u5B58\u7684 bot_token\u3001\u8D26\u53F7\u914D\u7F6E\u548C\u4F1A\u8BDD\u6620\u5C04\u3002\u5176\u4ED6\u5FAE\u4FE1\u8D26\u53F7\u4E0D\u53D7\u5F71\u54CD\u3002"),
      h2(
        "div",
        { className: "dxw-actions dim-viewActions" },
        h2(Button, { onClick: onCancelRemove, disabled: busy === "delete" }, "\u4FDD\u7559\u8D26\u53F7"),
        h2(
          Button,
          { kind: "danger", onClick: onConfirmRemove, disabled: busy === "delete" },
          busy === "delete" ? "\u6B63\u5728\u79FB\u9664\u2026" : "\u786E\u8BA4\u79FB\u9664"
        )
      )
    ) : null
  );
}
function AccountList(props) {
  return h2(
    "section",
    { className: "dim-listSection" },
    h2(ChannelListHeading, {
      className: "dxw-listHeading",
      title: "\u5DF2\u63A5\u5165\u7684\u5FAE\u4FE1\u8D26\u53F7",
      connectionLabel: "iLink \u957F\u8F6E\u8BE2"
    }),
    h2("ul", { className: "dxw-list dim-botList" }, props.bots.map((account) => h2(
      "li",
      { key: account.botId },
      h2(AccountCard, {
        account,
        busy: props.busyByBot[account.botId],
        feedback: props.feedbackByBot[account.botId],
        removing: props.removeTarget === account.botId,
        onReconnect: () => props.onReconnect(account),
        onWorkspaceSave: (workspace) => props.onWorkspaceSave(account, workspace),
        onAgentPresetSave: (agentPreset) => props.onAgentPresetSave(account, agentPreset),
        onRequestRemove: () => props.onRequestRemove(account),
        onConfirmRemove: () => props.onConfirmRemove(account),
        onCancelRemove: props.onCancelRemove
      })
    )))
  );
}
var EMPTY_TOTALS = Object.freeze({ configured: 0, connected: 0 });
function mergeWeixinProvisioningSnapshot(current, incoming, { restoreProvisioning = false } = {}) {
  if (!incoming || !current && !restoreProvisioning) return current;
  if (current && current.attemptId !== incoming.attemptId) return current;
  return {
    ...current,
    ...incoming,
    durationMs: current?.durationMs ?? 5 * 6e4
  };
}
function WeixinSettingsTab({ rpcCall }) {
  const [model, setModel] = React10.useState({
    phase: "loading",
    bots: [],
    totals: EMPTY_TOTALS,
    revision: 0,
    error: null,
    agentPresetCatalog: EMPTY_AGENT_PRESET_CATALOG
  });
  const [provision, setProvision] = React10.useState(null);
  const [busy, setBusy] = React10.useState(false);
  const [busyByBot, setBusyByBot] = React10.useState({});
  const [feedbackByBot, setFeedbackByBot] = React10.useState({});
  const [removeTarget, setRemoveTarget] = React10.useState(null);
  const [notice, setNotice] = React10.useState("");
  const [now, setNow] = React10.useState(() => Date.now());
  const addButtonRef = React10.useRef(null);
  const mountedRef = React10.useRef(true);
  const workspaceFence = useWorkspaceSnapshotFence();
  const scheduleAnimationFrame = useAnimationFrameScheduler();
  React10.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const announce = React10.useCallback((value) => {
    setNotice("");
    scheduleAnimationFrame(() => {
      if (value) setNotice(value);
    }, "announcement");
  }, [scheduleAnimationFrame]);
  const invoke = React10.useCallback(async (endpoint, payload = {}, signal) => {
    return unwrapRpcResult(await rpcCall(endpoint, payload, signal));
  }, [rpcCall]);
  const loadStatus = React10.useCallback(async ({
    signal,
    silent = false,
    restoreProvisioning = false
  } = {}) => {
    const workspaceVersion = workspaceFence.beginStatus();
    if (workspaceVersion === null || !mountedRef.current) return void 0;
    if (!silent) setModel((current) => ({ ...current, phase: "loading", error: null }));
    try {
      const snapshot = normalizeSnapshot(await invoke(WEIXIN_ENDPOINTS.status, {}, signal));
      if (signal?.aborted || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel({
        phase: "ready",
        bots: snapshot.bots,
        totals: snapshot.totals,
        revision: snapshot.revision,
        error: null,
        agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
      });
      if (snapshot.provisioning) {
        setProvision((current) => mergeWeixinProvisioningSnapshot(
          current,
          snapshot.provisioning,
          { restoreProvisioning }
        ));
      }
      return snapshot;
    } catch (error) {
      if (signal?.aborted || error?.name === "AbortError" || !mountedRef.current || !workspaceFence.canCommitStatus(workspaceVersion)) return void 0;
      setModel((current) => ({
        ...current,
        phase: silent && current.phase === "ready" ? "ready" : "error",
        error: presentError(error)
      }));
      return void 0;
    }
  }, [invoke, workspaceFence]);
  React10.useEffect(() => {
    const controller = new AbortController();
    void loadStatus({ signal: controller.signal, restoreProvisioning: true });
    return () => controller.abort();
  }, [loadStatus]);
  React10.useEffect(() => {
    if (model.phase !== "ready") return void 0;
    const controller = new AbortController();
    let running = false;
    const timer = window.setInterval(async () => {
      if (running) return;
      running = true;
      await loadStatus({
        signal: controller.signal,
        silent: true,
        restoreProvisioning: false
      });
      running = false;
    }, 15e3);
    return () => {
      controller.abort();
      window.clearInterval(timer);
    };
  }, [loadStatus, model.phase]);
  React10.useEffect(() => {
    if (!provision || !["pending", "scanned"].includes(provision.status)) return void 0;
    const timer = window.setInterval(() => setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [provision?.attemptId, provision?.status]);
  const startProvisioning = React10.useCallback(async ({ replace = false } = {}) => {
    setBusy(true);
    try {
      if (replace && provision?.attemptId) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision({ status: "starting" });
      const started = normalizeProvisioning(await invoke(WEIXIN_ENDPOINTS.beginProvisioning, { locale: "zh-CN" }));
      setNow(Date.now());
      setProvision({ ...started, durationMs: Math.max(1, started.expiresAt - Date.now()) });
      announce("\u5FAE\u4FE1\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210\uFF0C\u8BF7\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\u626B\u63CF\u3002");
    } catch (error) {
      setProvision({
        status: "failed",
        error: presentError(error),
        ...provision?.attemptId ? { attemptId: provision.attemptId } : {}
      });
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);
  const cancelProvisioning = React10.useCallback(async () => {
    setBusy(true);
    try {
      if (provision?.attemptId && !["failed", "expired", "cancelled"].includes(provision.status)) {
        await invoke(WEIXIN_ENDPOINTS.cancelProvisioning, { attemptId: provision.attemptId });
      }
      setProvision(null);
      announce("\u5DF2\u53D6\u6D88\u5FAE\u4FE1\u7ED1\u5B9A\u3002");
      scheduleAnimationFrame(() => addButtonRef.current?.focus(), "focus");
    } catch (error) {
      setProvision((current) => ({ ...current, status: "failed", error: presentError(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId, provision?.status, scheduleAnimationFrame]);
  const submitVerification = React10.useCallback(async (verifyCode) => {
    if (!provision?.attemptId) return;
    setBusy(true);
    try {
      const next = normalizeProvisioning(await invoke(WEIXIN_ENDPOINTS.submitVerification, {
        attemptId: provision.attemptId,
        verifyCode
      }));
      setProvision((current) => ({ ...current, ...next }));
      announce("\u914D\u5BF9\u7801\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u7B49\u5F85\u5FAE\u4FE1\u786E\u8BA4\u3002");
    } catch (error) {
      setProvision((current) => ({ ...current, status: "failed", error: presentError(error) }));
    } finally {
      setBusy(false);
    }
  }, [announce, invoke, provision?.attemptId]);
  React10.useEffect(() => {
    const attemptId = provision?.attemptId;
    if (!attemptId || !["pending", "scanned", "connecting"].includes(provision.status)) return void 0;
    const controller = new AbortController();
    const scheduler = createPollScheduler({
      setTimeoutFn: (callback, delayMs) => window.setTimeout(callback, delayMs),
      clearTimeoutFn: (timer) => window.clearTimeout(timer)
    });
    const poll = async () => {
      try {
        const result = normalizeProvisioning(await invoke(
          WEIXIN_ENDPOINTS.pollProvisioning,
          { attemptId },
          controller.signal
        ));
        if (scheduler.disposed) return;
        if (result.status === "connected") {
          const snapshot = await loadStatus({
            signal: controller.signal,
            silent: true,
            restoreProvisioning: false
          });
          if (scheduler.disposed) return;
          const account = snapshot?.bots.find((bot) => bot.botId === result.botId);
          if (!account?.connected) {
            setProvision((current) => current?.attemptId === attemptId ? { ...current, ...result, status: "connecting" } : current);
            scheduler.schedule(poll, result.pollIntervalMs);
            return;
          }
          setProvision(null);
          announce(result.alreadyConnected ? "\u8FD9\u4E2A\u5FAE\u4FE1\u8D26\u53F7\u5DF2\u7ECF\u7ED1\u5B9A\u5E76\u4FDD\u6301\u5728\u7EBF\u3002" : "\u5FAE\u4FE1\u5DF2\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5411\u5DF2\u7ED1\u5B9A\u7684\u673A\u5668\u4EBA\u53D1\u6D88\u606F\u3002");
          return;
        }
        setProvision((current) => current?.attemptId === attemptId ? { ...current, ...result, durationMs: current.durationMs } : current);
        if (["pending", "scanned", "connecting"].includes(result.status)) {
          scheduler.schedule(poll, result.pollIntervalMs);
        }
      } catch (error) {
        if (scheduler.disposed || error?.name === "AbortError") return;
        setProvision((current) => current?.attemptId === attemptId ? { ...current, status: "failed", error: presentError(error) } : current);
      }
    };
    scheduler.schedule(poll, provision.pollIntervalMs ?? 1e3);
    return () => {
      scheduler.dispose();
      controller.abort();
    };
  }, [announce, invoke, loadStatus, provision?.attemptId, provision?.status, provision?.pollIntervalMs]);
  const setBotBusy = React10.useCallback((botId, value) => {
    setBusyByBot((current) => {
      const next = { ...current };
      if (value) next[botId] = value;
      else delete next[botId];
      return next;
    });
  }, []);
  const reconnect = React10.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "reconnect");
    setFeedbackByBot((current) => {
      const next = { ...current };
      delete next[account.botId];
      return next;
    });
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.reconnectBot,
        { botId: account.botId, sendTest: true }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current) => ({
          ...current,
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current.agentPresetCatalog
        }));
      }
      const refreshed = snapshot.bots.find((bot) => bot.botId === account.botId);
      let feedback;
      if (!refreshed?.connected) {
        feedback = "\u5FAE\u4FE1\u4ECD\u672A\u8FDE\u63A5\uFF0C\u63D2\u4EF6\u4F1A\u7EE7\u7EED\u81EA\u52A8\u91CD\u8BD5\u3002";
      } else if (snapshot.testMessage?.sent) {
        feedback = "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u6D4B\u8BD5\u6D88\u606F\u5DF2\u53D1\u9001\u3002";
      } else if (snapshot.testMessage?.code === "test-target-unavailable") {
        feedback = "\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002\u673A\u5668\u4EBA\u5C1A\u672A\u6536\u5230\u53EF\u7528\u4E8E\u6D4B\u8BD5\u7684\u79C1\u804A\u6D88\u606F\u3002";
      } else if (snapshot.testMessage) {
        feedback = "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\uFF0C\u4F46\u6D4B\u8BD5\u6D88\u606F\u53D1\u9001\u5931\u8D25\u3002";
      } else {
        feedback = "\u5FAE\u4FE1\u8FDE\u63A5\u68C0\u67E5\u5B8C\u6210\u3002";
      }
      if (mountedRef.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    } catch {
      const feedback = "\u8FDE\u63A5\u68C0\u67E5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
      if (mountedRef.current) {
        setFeedbackByBot((current) => ({ ...current, [account.botId]: feedback }));
      }
      announce(feedback);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);
  const saveWorkspace = React10.useCallback(async (account, workspace) => {
    const workspaceVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "workspace");
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.setWorkspace,
        { botId: account.botId, workspace }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(workspaceVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);
  const saveAgentPreset = React10.useCallback(async (account, agentPreset) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "preset");
    try {
      const snapshot = normalizeSnapshot(await invoke(
        WEIXIN_ENDPOINTS.setAgentPreset,
        { botId: account.botId, agentPreset }
      ));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel({
          phase: "ready",
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          error: null,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
        });
      }
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      if (mountedRef.current) setBotBusy(account.botId, null);
    }
  }, [invoke, loadStatus, setBotBusy, workspaceFence]);
  const remove = React10.useCallback(async (account) => {
    const snapshotVersion = workspaceFence.beginMutation();
    setBotBusy(account.botId, "delete");
    try {
      const snapshot = normalizeSnapshot(await invoke(WEIXIN_ENDPOINTS.deleteBot, {
        botId: account.botId,
        confirm: true
      }));
      if (mountedRef.current && workspaceFence.canCommitMutation(snapshotVersion)) {
        setModel((current) => ({
          ...current,
          bots: snapshot.bots,
          totals: snapshot.totals,
          revision: snapshot.revision,
          agentPresetCatalog: snapshot.agentPresetCatalog ?? current.agentPresetCatalog
        }));
      }
      setRemoveTarget(null);
      announce("\u5FAE\u4FE1\u8D26\u53F7\u53CA\u672C\u673A\u51ED\u636E\u5DF2\u79FB\u9664\u3002");
    } catch (error) {
      announce(`\u79FB\u9664\u5931\u8D25\uFF1A${presentError(error).message}`);
    } finally {
      const shouldRefresh = workspaceFence.endMutation();
      if (shouldRefresh && mountedRef.current) void loadStatus({ silent: true });
      setBotBusy(account.botId, null);
    }
  }, [announce, invoke, loadStatus, setBotBusy, workspaceFence]);
  let provisionView = null;
  if (provision?.status === "starting") {
    provisionView = h2(ProgressPanel, { busy });
  } else if (["pending", "scanned"].includes(provision?.status)) {
    provisionView = h2(QrPanel, {
      provision,
      now,
      busy,
      onRefresh: () => void startProvisioning({ replace: true }),
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision?.status === "needs_verification") {
    provisionView = h2(VerificationPanel, {
      provision,
      busy,
      onSubmit: (code) => void submitVerification(code),
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision?.status === "connecting") {
    provisionView = h2(ProgressPanel, {
      scanned: true,
      busy,
      onCancel: () => void cancelProvisioning()
    });
  } else if (provision && ["failed", "expired", "cancelled"].includes(provision.status)) {
    provisionView = h2(ProvisionError, {
      provision,
      busy,
      onRetry: () => void startProvisioning({ replace: Boolean(provision.attemptId) }),
      onClose: () => void cancelProvisioning()
    });
  }
  return h2(AgentPresetCatalogContext.Provider, {
    value: model.agentPresetCatalog ?? EMPTY_AGENT_PRESET_CATALOG
  }, h2(
    "section",
    { className: "dxw-page dim-channelPage", "aria-label": "\u5FAE\u4FE1\u8BBE\u7F6E" },
    h2(Heading, {
      totals: model.totals,
      adding: Boolean(provision),
      busy,
      onAdd: () => void startProvisioning(),
      addButtonRef
    }),
    h2("div", { className: "dxw-visuallyHidden", role: "status", "aria-live": "polite" }, notice),
    model.error && model.phase === "ready" ? h2("div", { className: "dxw-statusNotice dim-statusNotice" }, `\u72B6\u6001\u5237\u65B0\u5931\u8D25\uFF1A${model.error.message}`) : null,
    model.phase === "loading" ? h2(LoadingView) : model.phase === "error" ? h2(
      "div",
      { className: "dxw-card dim-surfaceCard" },
      h2(
        "div",
        { className: "dxw-error dim-inlineError" },
        h2("h3", null, "\u65E0\u6CD5\u8BFB\u53D6\u5FAE\u4FE1\u72B6\u6001"),
        h2("p", null, model.error?.message ?? "\u8BF7\u7A0D\u540E\u91CD\u8BD5"),
        h2(Button, { onClick: () => void loadStatus() }, "\u91CD\u65B0\u8BFB\u53D6")
      )
    ) : h2(
      React10.Fragment,
      null,
      provisionView,
      model.bots.length === 0 && !provision ? h2(EmptyView, { onStart: () => void startProvisioning(), busy }) : null,
      model.bots.length > 0 ? h2(AccountList, {
        bots: model.bots,
        busyByBot,
        feedbackByBot,
        removeTarget,
        onReconnect: (account) => void reconnect(account),
        onWorkspaceSave: saveWorkspace,
        onAgentPresetSave: saveAgentPreset,
        onRequestRemove: (account) => setRemoveTarget(account.botId),
        onConfirmRemove: (account) => void remove(account),
        onCancelRemove: () => setRemoveTarget(null)
      }) : null
    )
  ));
}

// plugin-src/client/styles.js
var IM_STYLE_ID = "xmanrui-dsh-im-settings";
var CSS2 = String.raw`
.dim-page {
  --dim-blue: var(--dsw-alias-state-business-primary, #3370ff);
  --dim-blue-soft: color-mix(in srgb, var(--dim-blue) 9%, transparent);
  width: 100%;
  max-width: 1080px;
  padding: 2px 0 30px;
  color: var(--dsw-alias-label-primary, #1f2329);
  box-sizing: border-box;
}
.dim-page *, .dim-page *::before, .dim-page *::after { box-sizing: border-box; }
.dim-title { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 0 0 18px; }
.dim-brand { min-width: 0; display: flex; flex-direction: column; align-items: flex-start; gap: 1px; }
.dim-brandName { color: var(--dsw-alias-label-primary, #1f2329); font-size: 20px; line-height: 24px; font-weight: 800; letter-spacing: .04em; }
.dim-title p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: 18px; font-weight: 500; white-space: nowrap; }
.dim-githubAction { position: relative; display: inline-flex; flex: none; }
.dim-githubLink { min-height: 30px; display: inline-flex; align-items: center; gap: 5px; flex: none; padding: 0 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-layer-1, #fff); font-size: 12px; line-height: normal; font-weight: 560; text-decoration: none; transition: border-color .15s ease, color .15s ease, background .15s ease; }
.dim-githubLink:hover { border-color: #aeb3bb; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-githubLink:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 70%, white); outline-offset: 2px; }
.dim-githubArrow { font-size: 13px; line-height: 1; }
.dim-githubTooltip { position: absolute; right: 0; bottom: calc(100% + 8px); z-index: 20; width: max-content; max-width: min(220px, 80vw); padding: 6px 9px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 8px 24px rgb(31 35 41 / 14%); font-size: 11px; line-height: 16px; font-weight: 500; white-space: nowrap; opacity: 0; visibility: hidden; transform: translateY(3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-githubAction:hover .dim-githubTooltip, .dim-githubAction:focus-within .dim-githubTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-layout { display: grid; grid-template-columns: 174px 1px minmax(0, 1fr); gap: 24px; align-items: start; }
.dim-rail { max-height: 520px; display: grid; align-content: start; gap: 8px; overflow-y: auto; padding: 1px 4px 1px 1px; scrollbar-width: thin; scrollbar-color: var(--dsw-alias-border-l2, #dfe1e5) transparent; }
.dim-rail::-webkit-scrollbar { width: 4px; }
.dim-rail::-webkit-scrollbar-thumb { border-radius: 99px; background: var(--dsw-alias-border-l2, #dfe1e5); }
.dim-channel { width: 100%; min-height: 48px; display: grid; grid-template-columns: 30px minmax(0, 1fr); align-items: center; gap: 10px; padding: 8px 12px; border: 1px solid var(--dsw-alias-border-l2, #eef0f3); border-radius: 14px; color: inherit; background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 2px 8px rgb(31 35 41 / 3%); font: inherit; text-align: left; cursor: pointer; transition: border-color .16s ease, background .16s ease, box-shadow .16s ease; }
.dim-channel:hover { border-color: color-mix(in srgb, var(--dim-blue) 25%, var(--dsw-alias-border-l2, #eef0f3)); background: color-mix(in srgb, var(--dim-blue) 2%, var(--dsw-alias-bg-layer-3, #fff)); box-shadow: 0 5px 16px rgb(31 35 41 / 5%); }
.dim-channel[aria-selected="true"] { border-color: color-mix(in srgb, var(--dim-blue) 43%, var(--dsw-alias-border-l2, #dfe1e5)); color: var(--dim-blue); background: color-mix(in srgb, var(--dim-blue) 12%, var(--dsw-alias-bg-layer-3, #fff)); box-shadow: 0 3px 12px rgb(51 112 255 / 7%); }
.dim-channel:focus-visible { outline: none; border-color: color-mix(in srgb, var(--dim-blue) 72%, var(--dsw-alias-border-l2, #dfe1e5)); box-shadow: 0 0 0 1px color-mix(in srgb, var(--dim-blue) 24%, transparent) inset, 0 3px 12px rgb(51 112 255 / 7%); }
.dim-logo { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 9px; box-shadow: 0 1px 3px rgb(31 35 41 / 7%); }
.dim-logo svg { display: block; width: 20px; height: 20px; }
.dim-logoWeixin { color: white; background: #07c160; }
.dim-logoWeixin svg { width: 19px; height: 19px; }
.dim-logoFeishu { background: white; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); }
.dim-logoFeishu svg { width: 28px; height: 28px; }
.dim-logoDingtalk { color: white; background: #1677ff; }
.dim-logoDingtalk svg { width: 24px; height: 24px; }
.dim-logoQq { color: white; background: #1677ff; }
.dim-logoQq svg { width: 21px; height: 21px; }
.dim-logoWecom { background: white; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); }
.dim-logoWecom svg { width: 22px; height: 22px; }
.dim-logoTelegram { color: white; background: #229ed9; }
.dim-logoTelegram svg { width: 21px; height: 21px; }
.dim-logoOffice { color: white; background: linear-gradient(145deg, #12213f, #3964fe); }
.dim-logoOffice svg { width: 23px; height: 23px; }
.dim-logoDiscord { color: white; background: #5865f2; }
.dim-logoDiscord svg { width: 21px; height: 21px; }
.dim-logoSlack { color: white; background: #4a154b; }
.dim-logoSlack svg { width: 21px; height: 21px; }
.dim-logoWhatsapp { color: white; background: #25d366; }
.dim-logoWhatsapp svg { width: 21px; height: 21px; }
.dim-channelCopy { min-width: 0; display: grid; }
.dim-channelCopy strong { overflow: hidden; color: inherit; font-size: 14px; line-height: 20px; font-weight: 680; text-overflow: ellipsis; white-space: nowrap; }
.dim-channelNote { overflow: hidden; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 10px; line-height: 13px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }
.dim-divider { width: 1px; min-height: 520px; background: var(--dsw-alias-border-l1, #eef0f3); }
.dim-panel { min-width: 0; container-type: inline-size; }
.dim-panel .bxf-page, .dim-panel .dxw-page, .dim-panel .ddt-page, .dim-panel .dqq-page, .dim-panel .dwecom-page, .dim-panel .dsl-page, .dim-panel .dwa-page { width: 100%; max-width: none; padding: 0 0 24px; }
.dim-panel .bxf-heading, .dim-panel .dxw-heading, .dim-panel .ddt-heading { justify-content: flex-end; }
.dim-panel .bxf-headingTools, .dim-panel .dxw-tools, .dim-panel .ddt-tools { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; justify-content: stretch; gap: 8px; }
.dim-panel .dim-bindActions { min-width: 0; display: flex; align-items: center; flex-wrap: nowrap; gap: 8px; }
.dim-panel .dim-bindActions > button { min-width: 0; }
.dim-panel .bxf-headingTools .dim-scanButton, .dim-panel .dxw-tools .dim-scanButton, .dim-panel .ddt-tools .dim-scanButton { flex: none; min-height: 34px; display: inline-flex; align-items: center; justify-content: center; justify-self: start; gap: 6px; padding: 0 10px; border: 1px solid #1677ff; border-radius: 8px; color: #fff; background: #1677ff; box-shadow: none; font: inherit; font-size: 13px; font-weight: 560; white-space: nowrap; }
.dim-panel .bxf-headingTools .dim-scanButton:hover:not(:disabled), .dim-panel .dxw-tools .dim-scanButton:hover:not(:disabled), .dim-panel .ddt-tools .dim-scanButton:hover:not(:disabled) { border-color: #0958d9; background: #0958d9; }
.dim-panel .dim-credentialButton { flex: none; min-height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 0 10px; border: 1px solid #86909c; border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 5%); font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-actionIcon { width: 15px; height: 15px; flex: 0 0 15px; }
.dim-panel .dim-credentialButton:hover:not(:disabled) { border-color: #4e5969; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-credentialButton[aria-pressed="true"] { border-color: #4e5969; background: var(--dsw-alias-bg-module-platform, #f2f3f5); box-shadow: inset 0 0 0 1px rgb(78 89 105 / 8%); }
.dim-panel .bxf-headingTools .dim-onlineBadge, .dim-panel .dxw-tools .dim-onlineBadge, .dim-panel .ddt-tools .dim-onlineBadge { min-height: 30px; display: inline-flex; align-items: center; justify-self: end; gap: 0; padding: 0 11px; border: 0; border-radius: 999px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f2f3f5); font: inherit; font-size: 12px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-channelPage { width: 100%; max-width: none; display: flex; flex-direction: column; gap: 12px; padding: 0 0 24px; color: var(--dsw-alias-label-primary, #1f2329); box-sizing: border-box; }
.dim-panel .dim-surfaceCard { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dim-panel .dim-surfaceCard::before { display: none; }
.dim-panel .dim-surfaceBody { padding: 24px; }
.dim-panel .dim-credentialPanel { display: grid; gap: 18px; padding: 20px; }
.dim-panel .dim-credentialTitle { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-credentialForm { min-width: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 12px; }
.dim-panel .dim-credentialFormSingle { grid-template-columns: minmax(0, 1fr); }
.dim-panel .dim-credentialField { min-width: 0; display: grid; gap: 7px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; font-weight: 560; }
.dim-panel .dim-credentialField input { width: 100%; min-width: 0; height: 38px; padding: 0 11px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; outline: none; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: 13px ui-monospace, SFMono-Regular, Menlo, monospace; transition: border-color .16s ease, box-shadow .16s ease; }
.dim-panel .dim-credentialField input:focus { border-color: #4e5969; box-shadow: 0 0 0 3px rgb(78 89 105 / 10%); }
.dim-panel .dim-credentialField input::placeholder { color: var(--dsw-alias-label-tertiary, #8f959e); font-family: inherit; }
.dim-panel .dim-credentialError, .dim-panel .dim-credentialActions { grid-column: 1 / -1; }
.dim-panel .dim-credentialError { margin: 0; color: var(--dsw-alias-state-error-primary, #d54941); font-size: 12px; line-height: 1.5; }
.dim-panel .dim-credentialActions { margin-top: 0; }
.dim-panel .dim-listSection { display: flex; flex-direction: column; gap: 0; }
.dim-panel .dim-listHeading { min-height: 0; display: flex; align-items: center; justify-content: space-between; gap: 16px; margin: 0 0 6px; padding: 0; }
.dim-panel .dim-listHeading h3 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 14px; line-height: normal; font-weight: 650; }
.dim-panel .dim-listTitle { min-width: 0; display: inline-flex; align-items: center; gap: 6px; }
.dim-panel .dim-channelHelp { position: relative; display: inline-flex; flex: none; }
.dim-panel .dim-channelHelpButton { width: 17px; height: 17px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, #1677ff 28%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 50%; color: #1677ff; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 11px; line-height: 1; font-weight: 700; cursor: help; transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .15s ease; }
.dim-panel .dim-channelHelpButton:hover { border-color: #1677ff; color: #0f5fce; background: color-mix(in srgb, #1677ff 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-channelHelpButton:focus-visible { outline: none; border-color: #1677ff; box-shadow: 0 0 0 3px color-mix(in srgb, #1677ff 16%, transparent); }
.dim-panel .dim-channelTooltip { position: absolute; top: calc(100% + 7px); left: 0; z-index: 30; width: max-content; max-width: min(280px, calc(100vw - 48px)); display: flex; align-items: baseline; gap: 5px; padding: 8px 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 10px 28px rgb(31 35 41 / 16%); font-size: 11px; line-height: 16px; font-weight: 400; white-space: normal; opacity: 0; visibility: hidden; transform: translateY(-3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-panel .dim-channelTooltip strong { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 600; white-space: nowrap; }
.dim-panel .dim-channelHelp:hover .dim-channelTooltip, .dim-panel .dim-channelHelp:focus-within .dim-channelTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-panel .dim-botList { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
.dim-panel .dim-loadingView { padding: 38px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dim-panel .dim-loadingView h3 { margin: 0 0 7px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 17px; line-height: normal; font-weight: 650; }
.dim-panel .dim-loadingView p { margin: 0; line-height: 1.6; }
.dim-panel .dim-spinner { width: 24px; height: 24px; margin: 0 auto 13px; border: 3px solid var(--dsw-alias-border-l2, #e6e8eb); border-top-color: #1677ff; border-radius: 50%; animation: dim-spin .8s linear infinite; }
@keyframes dim-spin { to { transform: rotate(360deg); } }
.dim-panel .dim-emptyView { min-height: 230px; display: grid; grid-template-columns: minmax(0, 1fr) 180px; align-items: center; gap: 30px; }
.dim-panel .dim-emptyCopy { min-width: 0; }
.dim-panel .dim-emptyCopy h3 { margin: 8px 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 18px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-emptyCopy > p { max-width: 560px; margin: 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dim-panel .dim-emptyBrand { width: 110px; height: 110px; display: grid; place-items: center; justify-self: center; border-radius: 28px; box-shadow: 0 18px 45px rgb(22 119 255 / 18%); }
.dim-panel .dim-stateLabel { display: inline-flex; align-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; font-weight: 600; }
.dim-panel .dim-stateDot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: var(--dsw-alias-label-tertiary, #8f959e); box-shadow: none; }
.dim-panel .dim-stateDot[data-tone="success"] { background: var(--dsw-alias-state-success-primary, #20a162); }
.dim-panel .dim-stateDot[data-tone="warning"] { background: var(--dsw-alias-state-warn-primary, #d97706); }
.dim-panel .dim-stateDot[data-tone="error"] { background: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-viewActions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.dim-panel .dim-viewActions .bxf-button, .dim-panel .dim-viewActions .dxw-button, .dim-panel .dim-viewActions .ddt-button { min-height: 34px; padding: 0 13px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: none; font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-viewActions .bxf-button[data-kind="primary"], .dim-panel .dim-viewActions .dxw-button[data-kind="primary"], .dim-panel .dim-viewActions .ddt-button[data-kind="primary"] { border-color: #1677ff; color: #fff; background: #1677ff; box-shadow: none; }
.dim-panel .dim-viewActions .bxf-button[data-kind="danger"], .dim-panel .dim-viewActions .dxw-button[data-kind="danger"], .dim-panel .dim-viewActions .ddt-button[data-kind="danger"] { color: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-qrLayout { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 34px; align-items: start; }
.dim-panel .dim-qrColumn { width: 100%; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.dim-panel .dim-qrFrame { position: relative; width: min(270px, 100%); height: auto; aspect-ratio: 1; display: grid; place-items: center; overflow: hidden; padding: 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 16px; background: #fff; }
.dim-panel .dim-qrFrame::before { content: ""; position: absolute; inset: 7px; z-index: 0; border: 1px solid color-mix(in srgb, #1677ff 16%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 12px; pointer-events: none; }
.dim-panel .dim-qrFrame::after { display: none; }
.dim-panel .dim-qrFrame img { position: relative; z-index: 1; width: 100%; height: 100%; display: block; object-fit: contain; }
.dim-panel .dim-qrFallback { position: relative; z-index: 1; display: grid; place-items: center; gap: 8px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; line-height: 1.5; text-align: center; }
.dim-panel .dim-qrExpired { position: absolute; inset: 0; z-index: 2; display: grid; place-items: center; padding: 20px; color: var(--dsw-static-neutral-bluish-1000, #0f1115); background: rgb(255 255 255 / 92%); font-size: 15px; line-height: 1.6; font-weight: 650; text-align: center; white-space: pre-line; backdrop-filter: blur(3px); }
.dim-panel .dim-countdown { width: min(270px, 100%); margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-countdownTop { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 6px; }
.dim-panel .dim-countdownTop strong { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 650; }
.dim-panel .dim-progress { height: 4px; overflow: hidden; margin: 0; border-radius: 99px; background: var(--dsw-alias-bg-module-platform, #eef0f3); }
.dim-panel .dim-progress span { display: block; width: var(--bxf-progress, var(--dxw-progress, var(--ddt-progress, 0%))); height: 100%; border-radius: inherit; background: #1677ff; transition: width .25s linear; }
.dim-panel .dim-qrCopy { min-width: 0; overflow-wrap: anywhere; }
.dim-panel .dim-qrCopy h3 { margin: 9px 0 8px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 18px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-qrCopy > p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.65; }
.dim-panel .dim-steps { margin: 18px 0 16px; padding: 0; list-style: none; counter-reset: dim-step; }
.dim-panel .dim-steps li { position: relative; min-height: 28px; display: flex; align-items: center; padding: 5px 0 5px 36px; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.5; counter-increment: dim-step; }
.dim-panel .dim-steps li::before { content: counter(dim-step); position: absolute; left: 0; top: 4px; width: 25px; height: 25px; display: grid; place-items: center; border-radius: 8px; color: #4d93f8; background: color-mix(in srgb, #1677ff 16%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 12px; font-weight: 650; }
.dim-panel .dim-specialView { padding: 32px; text-align: center; }
.dim-panel .dim-statusNotice { display: flex; align-items: flex-start; gap: 10px; padding: 13px 15px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 22%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 10px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 8%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 13px; line-height: 1.5; }
.dim-panel .dim-inlineError { display: flex; align-items: flex-start; flex-direction: column; gap: 10px; padding: 22px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-inlineError > div { min-width: 0; }
.dim-panel .dim-inlineError h3 { margin: 0; color: inherit; font-size: 17px; line-height: 1.35; font-weight: 650; }
.dim-panel .dim-inlineError p { margin: 7px 0 0; color: inherit; line-height: 1.6; }
.dim-panel .dim-confirm { padding: 18px 24px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-confirm strong, .dim-panel .dim-confirm h4 { margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 14px; line-height: 1.4; font-weight: 650; }
.dim-panel .dim-confirm p { margin: 7px 0 0; color: var(--dsw-alias-label-secondary, #646a73); line-height: 1.6; }
.dim-panel .dim-cardFooter { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 6px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dim-panel .dim-workspace { min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; column-gap: 10px; row-gap: 4px; margin-top: 6px; padding: 6px 10px; border: 1px solid var(--dsw-alias-border-l1, #eef0f3); border-radius: 9px; background: var(--dsw-alias-bg-module-platform, #f7f8fa); }
.dim-panel .dim-workspaceHeader { display: contents; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-workspaceHeader > span { grid-column: 1; grid-row: 1; white-space: nowrap; }
.dim-panel .dim-workspaceEdit { grid-column: 2; grid-row: 1; padding: 0; border: 0; color: #1677ff; background: transparent; font: inherit; font-weight: 560; white-space: nowrap; cursor: pointer; }
.dim-panel .dim-workspaceEdit:disabled { cursor: not-allowed; opacity: .55; }
.dim-panel .dim-workspacePath { min-width: 0; max-width: 100%; grid-column: 1 / -1; grid-row: 2; display: block; overflow-x: auto; overflow-y: hidden; color: var(--dsw-alias-label-primary, #1f2329); font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; white-space: nowrap; }
.dim-panel .dim-preset { min-width: 0; display: grid; grid-template-columns: minmax(0, 1fr) max-content; align-items: center; column-gap: 10px; row-gap: 4px; margin-top: 6px; padding: 6px 10px; border: 1px solid var(--dsw-alias-border-l1, #eef0f3); border-radius: 9px; background: var(--dsw-alias-bg-module-platform, #f7f8fa); }
.dim-panel .dim-presetHeader { position: relative; min-width: 0; grid-column: 1 / -1; grid-row: 1; display: flex; align-items: center; justify-content: space-between; gap: 10px; color: var(--dsw-alias-label-secondary, #646a73); font-size: 12px; line-height: normal; }
.dim-panel .dim-presetTitle { min-width: 0; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
.dim-panel .dim-presetHelp { display: inline-flex; align-items: center; flex: none; }
.dim-panel .dim-presetHelpButton { width: 17px; height: 17px; display: grid; place-items: center; padding: 0; border: 1px solid color-mix(in srgb, #1677ff 28%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 50%; color: #1677ff; background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 11px; line-height: 1; font-weight: 700; cursor: help; transition: border-color .15s ease, color .15s ease, background .15s ease, box-shadow .15s ease; }
.dim-panel .dim-presetHelpButton:hover { border-color: #1677ff; color: #0f5fce; background: color-mix(in srgb, #1677ff 8%, var(--dsw-alias-bg-layer-1, #fff)); }
.dim-panel .dim-presetHelpButton:focus-visible { outline: none; border-color: #1677ff; box-shadow: 0 0 0 3px color-mix(in srgb, #1677ff 16%, transparent); }
.dim-panel .dim-presetTooltip { position: absolute; top: calc(100% + 7px); left: 0; z-index: 30; width: min(320px, 100%); padding: 9px 10px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-3, #fff); box-shadow: 0 10px 28px rgb(31 35 41 / 16%); font-size: 11px; line-height: 16px; font-weight: 400; overflow-wrap: anywhere; white-space: normal; opacity: 0; visibility: hidden; transform: translateY(-3px); pointer-events: none; transition: opacity .15s ease, transform .15s ease, visibility .15s ease; }
.dim-panel .dim-presetHelp:hover .dim-presetTooltip, .dim-panel .dim-presetHelp:focus-within .dim-presetTooltip { opacity: 1; visibility: visible; transform: translateY(0); }
.dim-panel .dim-presetStatus { grid-column: 2; grid-row: 1; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; white-space: nowrap; }
.dim-panel .dim-presetSelect { min-width: 0; max-width: 100%; grid-column: 1 / -1; grid-row: 2; height: 30px; padding: 0 8px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 7px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 12px; }
.dim-panel .dim-presetSelect:disabled { cursor: not-allowed; opacity: .55; }
.dim-panel .dim-presetError { grid-column: 1 / -1; grid-row: 3; margin: 0; color: var(--dsw-alias-state-error-primary, #d54941); font-size: 12px; line-height: 1.4; }
.dim-directoryPickerBackdrop { --dim-blue: var(--dsw-alias-state-business-primary, #3370ff); --dim-blue-soft: color-mix(in srgb, var(--dim-blue) 9%, transparent); position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px; background: rgb(15 17 21 / 42%); backdrop-filter: blur(3px); }
.dim-directoryPickerBackdrop, .dim-directoryPickerBackdrop *, .dim-directoryPickerBackdrop *::before, .dim-directoryPickerBackdrop *::after { box-sizing: border-box; }
.dim-directoryPicker { width: min(720px, 100%); height: min(620px, calc(100vh - 48px)); min-height: 420px; display: grid; grid-template-rows: auto minmax(0, 1fr) auto; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 18px; outline: none; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 24px 72px rgb(15 17 21 / 24%); }
.dim-directoryPickerHeader { min-width: 0; padding: 22px 24px 17px; border-bottom: 1px solid var(--dsw-alias-border-l1, #eef0f3); }
.dim-directoryPickerHeader h3 { margin: 0 0 14px; color: var(--dsw-alias-label-primary, #1f2329); font-size: 20px; line-height: 1.35; font-weight: 680; }
.dim-directoryPickerHeader > p { margin: 0; color: var(--dsw-alias-label-secondary, #646a73); font-size: 13px; }
.dim-directoryCrumbs { min-width: 0; display: flex; align-items: center; flex-wrap: wrap; gap: 4px; color: var(--dsw-alias-label-tertiary, #8f959e); }
.dim-directoryCrumbs button { max-width: 210px; overflow: hidden; padding: 3px 5px; border: 0; border-radius: 6px; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; line-height: 18px; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; }
.dim-directoryCrumbs button:hover:not(:disabled) { color: var(--dim-blue); background: var(--dim-blue-soft); }
.dim-directoryCrumbs button[aria-current="page"] { color: var(--dsw-alias-label-primary, #1f2329); font-weight: 650; }
.dim-directoryCrumbs button:focus-visible, .dim-directoryList button:focus-visible, .dim-directoryPickerActions button:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 65%, white); outline-offset: 1px; }
.dim-directoryCrumbSeparator { flex: none; font-size: 12px; }
.dim-directoryPickerBody { min-height: 0; overflow-y: auto; padding: 14px 16px; scrollbar-width: thin; scrollbar-color: var(--dsw-alias-border-l2, #dfe1e5) transparent; }
.dim-directoryList { display: grid; gap: 3px; margin: 0; padding: 0; list-style: none; }
.dim-directoryList button { width: 100%; min-height: 46px; display: grid; grid-template-columns: 24px minmax(0, 1fr) 18px; align-items: center; gap: 10px; padding: 7px 11px; border: 0; border-radius: 9px; color: var(--dsw-alias-label-primary, #1f2329); background: transparent; font: inherit; text-align: left; cursor: pointer; }
.dim-directoryList button:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-directoryList button:disabled, .dim-directoryCrumbs button:disabled { cursor: wait; opacity: .55; }
.dim-directoryFolder { width: 24px; height: 24px; display: grid; place-items: center; color: var(--dsw-alias-label-secondary, #646a73); }
.dim-directoryFolder svg { width: 22px; height: 22px; }
.dim-directoryName { min-width: 0; overflow: hidden; font-size: 14px; line-height: 20px; text-overflow: ellipsis; white-space: nowrap; }
.dim-directoryChevron { width: 18px; height: 18px; display: grid; place-items: center; color: var(--dsw-alias-label-tertiary, #8f959e); }
.dim-directoryChevron svg { width: 17px; height: 17px; }
.dim-directoryPickerState { min-height: 210px; display: grid; place-content: center; justify-items: center; gap: 10px; color: var(--dsw-alias-label-secondary, #646a73); text-align: center; }
.dim-directoryPickerState p { margin: 0; font-size: 13px; line-height: 1.6; }
.dim-directoryPickerSpinner { width: 24px; height: 24px; border: 3px solid var(--dsw-alias-border-l2, #e6e8eb); border-top-color: var(--dim-blue); border-radius: 50%; animation: dim-spin .8s linear infinite; }
.dim-directoryPickerError { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 8px 0 0; padding: 10px 12px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 22%, var(--dsw-alias-border-l2, #dfe1e5)); border-radius: 8px; color: var(--dsw-alias-state-error-primary, #d54941); background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #d54941) 7%, var(--dsw-alias-bg-layer-1, #fff)); font-size: 12px; line-height: 1.5; }
.dim-directoryPickerError button { flex: none; padding: 4px 8px; border: 0; border-radius: 6px; color: inherit; background: transparent; font: inherit; font-weight: 650; cursor: pointer; }
.dim-directoryPickerTruncated { margin: 10px 4px 0; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 12px; line-height: 1.5; }
.dim-directoryPickerFooter { display: grid; grid-template-columns: max-content minmax(0, 1fr) max-content; align-items: center; gap: 14px; padding: 16px 20px; border-top: 1px solid var(--dsw-alias-border-l1, #eef0f3); background: var(--dsw-alias-bg-layer-1, #fff); }
.dim-directoryHidden { display: inline-flex; align-items: center; gap: 7px; padding: 2px 0; border: 0; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; white-space: nowrap; cursor: pointer; }
.dim-directoryHidden:focus-visible { outline: 2px solid color-mix(in srgb, var(--dim-blue) 65%, white); outline-offset: 2px; }
.dim-directoryHidden:disabled { cursor: not-allowed; opacity: .52; }
.dim-directoryHiddenBox { position: relative; width: 15px; height: 15px; flex: 0 0 15px; border: 1px solid var(--dsw-alias-border-l2, #c9cdd4); border-radius: 4px; background: var(--dsw-alias-bg-layer-1, #fff); }
.dim-directoryHidden[aria-pressed="true"] .dim-directoryHiddenBox { border-color: var(--dim-blue); background: var(--dim-blue); }
.dim-directoryHidden[aria-pressed="true"] .dim-directoryHiddenBox::after { content: ""; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.dim-directoryPickerNotice { min-width: 0; margin: 0; color: var(--dsw-alias-label-tertiary, #8f959e); font-size: 11px; line-height: 1.45; text-align: right; }
.dim-directoryPickerActions { display: flex; gap: 8px; }
.dim-directoryPickerActions button { min-height: 36px; padding: 0 14px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; white-space: nowrap; cursor: pointer; }
.dim-directoryPickerActions .dim-directoryPickerPrimary { border-color: var(--dim-blue); color: #fff; background: var(--dim-blue); }
.dim-directoryPickerActions button:hover:not(:disabled) { filter: brightness(.97); }
.dim-directoryPickerActions button:disabled { cursor: not-allowed; opacity: .52; }
.dim-panel .dim-cardSummary { min-width: 0; color: var(--dsw-alias-label-secondary, #646a73); font: inherit; font-size: 12px; font-weight: 400; line-height: normal; }
.dim-panel .dim-cardFooterLayout { min-width: 0; width: 100%; display: flex; flex-direction: column; align-items: stretch; gap: 9px; }
.dim-panel .dim-cardFooterLayout > .dim-cardActions { align-self: stretch; }
.dim-panel .dim-cardFeedback { width: 100%; padding: 8px 10px; border-radius: 8px; color: var(--dsw-alias-label-secondary, #646a73); background: var(--dsw-alias-bg-module-platform, #f7f8fa); font: inherit; font-size: 12px; font-weight: 400; line-height: 18px; overflow-wrap: anywhere; white-space: normal; }
.dim-panel .dim-cardActions { flex: none; width: 100%; display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin: 0; }
.dim-panel .dim-cardActions .dim-cardAction { flex: none; min-height: 32px; padding: 0 11px; border: 1px solid var(--dsw-alias-border-l2, #dfe1e5); border-radius: 8px; color: var(--dsw-alias-label-primary, #1f2329); background: var(--dsw-alias-bg-layer-1, #fff); font: inherit; font-size: 13px; font-weight: 560; line-height: normal; white-space: nowrap; }
.dim-panel .dim-cardActions .dim-cardAction:hover:not(:disabled) { border-color: #aeb3bb; background: var(--dsw-alias-interactive-bg-hover, #f7f8fa); }
.dim-panel .dim-cardActions .dim-cardAction[data-kind="danger"] { color: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-botCard { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l2, #e5e6eb); border-radius: 14px; background: var(--dsw-alias-bg-layer-1, #fff); box-shadow: 0 1px 2px rgb(31 35 41 / 3%); }
.dim-panel .dim-botCard::before { display: none; }
.dim-panel .dim-botCardBody { position: relative; padding: 12px; }
.dim-panel .dim-botCardTop { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.dim-panel .dim-botIdentity { min-width: 0; display: flex; align-items: center; gap: 10px; }
.dim-panel .dim-botAvatar { flex: none; width: 38px; height: 38px; display: grid; place-items: center; overflow: hidden; border-radius: 11px; box-shadow: none; }
.dim-panel .dim-botAvatar svg { width: 27px; height: 27px; }
.dim-panel .dim-botName { min-width: 0; }
.dim-panel .dim-botName h3 { overflow: hidden; margin: 0; color: var(--dsw-alias-label-primary, #1f2329); font-size: 15px; font-weight: 650; line-height: normal; text-overflow: ellipsis; white-space: nowrap; }
.dim-panel .dim-botName p { overflow: hidden; margin: 4px 0 0; color: var(--dsw-alias-label-secondary, #646a73); font: 12px ui-monospace, SFMono-Regular, monospace; line-height: normal; text-overflow: ellipsis; white-space: nowrap; }
.dim-panel .dim-botHealthGroup { flex: none; display: grid; justify-items: end; gap: 5px; }
.dim-panel .dim-botCard .dim-botHealth { flex: none; min-height: 0; display: inline-flex; align-items: center; gap: 7px; padding: 0; border: 0; border-radius: 0; color: var(--dsw-alias-label-secondary, #646a73); background: transparent; font: inherit; font-size: 12px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-lastChecked { display: inline-flex; align-items: baseline; gap: 4px; color: var(--dsw-alias-label-tertiary, #8f959e); font: inherit; font-size: 11px; font-weight: 400; line-height: normal; white-space: nowrap; }
.dim-panel .dim-botCard .dim-healthDot { flex: none; width: 8px; height: 8px; border-radius: 50%; background: #aeb3bb; box-shadow: none; }
.dim-panel .dim-botCard .dim-healthDot[data-tone="success"] { background: var(--dsw-alias-state-success-primary, #20a162); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-state-success-primary, #20a162) 14%, transparent); }
.dim-panel .dim-botCard .dim-healthDot[data-tone="warning"] { background: var(--dsw-alias-state-warn-primary, #d97706); }
.dim-panel .dim-botCard .dim-healthDot[data-tone="error"] { background: var(--dsw-alias-state-error-primary, #d54941); }
.dim-panel .dim-botCard .dim-cardFooter { margin-top: 0; }
.dim-panel .ddt-headingCopy { display: none; }
.dim-panel .ddt-qrFrame, .dim-panel .ddt-countdown { width: min(270px, 100%); }
@container (max-width: 680px) {
  .dim-panel .bxf-headingTools, .dim-panel .dxw-tools, .dim-panel .ddt-tools { gap: 6px; }
  .dim-panel .dim-bindActions { gap: 6px; }
  .dim-panel .bxf-headingTools .dim-scanButton, .dim-panel .dxw-tools .dim-scanButton, .dim-panel .ddt-tools .dim-scanButton, .dim-panel .dim-credentialButton { gap: 5px; padding-inline: 8px; font-size: 12px; }
  .dim-panel .dim-actionIcon { width: 13px; height: 13px; flex-basis: 13px; }
  .dim-panel .bxf-headingTools .dim-onlineBadge, .dim-panel .dxw-tools .dim-onlineBadge, .dim-panel .ddt-tools .dim-onlineBadge { padding-inline: 8px; font-size: 11px; }
  .dim-panel .dim-credentialForm { grid-template-columns: minmax(0, 1fr); }
  .dim-panel .dim-credentialError, .dim-panel .dim-credentialActions { grid-column: auto; }
  .dim-panel .dim-emptyView { min-height: 0; grid-template-columns: minmax(0, 1fr); }
  .dim-panel .dim-emptyBrand { display: none; }
  .dim-panel .dim-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; gap: 24px; }
  .dim-panel .dim-qrColumn { width: 100%; min-width: 0; }
  .dim-panel .dim-qrCopy { width: 100%; min-width: 0; overflow-wrap: anywhere; }
  .dim-panel .ddt-qrLayout { grid-template-columns: minmax(0, 1fr); justify-items: center; gap: 24px; }
  .dim-panel .ddt-qrColumn { width: 100%; min-width: 0; }
  .dim-panel .ddt-qrCopy { width: 100%; min-width: 0; overflow-wrap: anywhere; }
}
@media (max-width: 840px) {
  .dim-title { align-items: flex-start; }
  .dim-layout { grid-template-columns: minmax(0, 1fr); gap: 18px; }
  .dim-rail { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dim-divider { display: none; }
  .dim-rail { max-height: none; overflow: visible; padding-right: 1px; }
  .dim-channel { min-height: 48px; }
}
@media (max-width: 720px) {
  .dim-panel .dim-botCardTop { flex-direction: column; align-items: stretch; }
  .dim-panel .dim-botHealthGroup { justify-items: start; }
}
@media (max-width: 560px) {
  .dim-title { flex-direction: column; gap: 10px; }
  .dim-title p { white-space: normal; }
  .dim-githubTooltip { right: auto; left: 0; }
  .dim-rail { grid-template-columns: minmax(0, 1fr); }
  .dim-directoryPickerBackdrop { padding: 10px; }
  .dim-directoryPicker { height: calc(100vh - 20px); min-height: 0; border-radius: 14px; }
  .dim-directoryPickerHeader { padding: 18px 17px 14px; }
  .dim-directoryPickerHeader h3 { font-size: 18px; }
  .dim-directoryPickerBody { padding: 10px; }
  .dim-directoryPickerFooter { grid-template-columns: minmax(0, 1fr) max-content; gap: 10px; padding: 13px 14px; }
  .dim-directoryPickerNotice { grid-column: 1 / -1; grid-row: 1; text-align: left; }
}
@media (prefers-reduced-motion: reduce) {
  .dim-page * { transition-duration: .01ms !important; }
  .dim-directoryPickerSpinner { animation-duration: 1.8s; }
}
`;
function installImStyles() {
  if (typeof document === "undefined") return () => {
  };
  const existing = document.querySelector(`style[data-plugin-css="${IM_STYLE_ID}"]`);
  if (existing) return () => {
  };
  const style = document.createElement("style");
  style.dataset.plugin = "@xmanrui/dsh-im";
  style.dataset.pluginCss = IM_STYLE_ID;
  style.textContent = CSS2;
  document.head.appendChild(style);
  return () => style.remove();
}

// plugin-src/client/index.js
var name = "weixin-settings";
var inject = ["slots", "connection", "locale", "workspaces"];
var CHANNELS = Object.freeze([
  { id: "weixin", label: "\u5FAE\u4FE1" }
]);
function WeixinLogo() {
  return h2(
    "span",
    { className: "dim-logo dim-logoWeixin", "aria-hidden": "true" },
    h2(WeixinLogoGlyph)
  );
}
function ChannelLogo({ channel }) {
  if (channel === "weixin") return h2(WeixinLogo);
  return null;
}
function IMSettingsTab({
  weixinRpcCall,
  workspaceDirectoryPicker
}) {
  const [selected, setSelected] = React11.useState("weixin");
  const githubTooltipId = React11.useId();
  const active = CHANNELS.find((channel) => channel.id === selected) ?? CHANNELS[0];
  return h2(
    WorkspaceDirectoryPickerContext.Provider,
    { value: workspaceDirectoryPicker },
    h2(
      "section",
      { className: "dim-page", "aria-label": "\u5FAE\u4FE1\u673A\u5668\u4EBA\u8BBE\u7F6E" },
      h2(
        "header",
        { className: "dim-title" },
        h2(
          "div",
          { className: "dim-brand" },
          h2("strong", { className: "dim-brandName" }, "DSH-WEIXIN"),
          h2("p", null, "\u8BA9 DeepSeek Harness \u89E6\u624B\u53EF\u53CA")
        ),
        h2(
          "span",
          { className: "dim-githubAction" },
          h2(
            "a",
            {
              className: "dim-githubLink",
              href: "https://github.com/zackdk/dsh-weixin",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "dsh-weixin GitHub",
              "aria-describedby": githubTooltipId
            },
            h2("span", null, "GitHub"),
            h2("span", { className: "dim-githubArrow", "aria-hidden": "true" }, "\u2197")
          ),
          h2("span", {
            id: githubTooltipId,
            className: "dim-githubTooltip",
            role: "tooltip"
          }, "\u5E2E\u52A9\u4E0E\u53CD\u9988 \xB7 \u524D\u5F80 GitHub")
        )
      ),
      h2(
        "div",
        { className: "dim-layout" },
        h2(
          "nav",
          { className: "dim-rail", role: "tablist", "aria-label": "IM \u6E20\u9053" },
          CHANNELS.map((channel) => h2(
            "button",
            {
              key: channel.id,
              type: "button",
              role: "tab",
              id: `dim-tab-${channel.id}`,
              className: "dim-channel",
              "aria-selected": channel.id === active.id,
              "aria-controls": `dim-panel-${channel.id}`,
              onClick: () => setSelected(channel.id)
            },
            h2(ChannelLogo, { channel: channel.id }),
            h2(
              "span",
              { className: "dim-channelCopy" },
              h2("strong", null, channel.label),
              channel.note ? h2("small", { className: "dim-channelNote" }, channel.note) : null
            )
          ))
        ),
        h2("div", { className: "dim-divider", "aria-hidden": "true" }),
        h2("main", {
          className: "dim-panel",
          role: "tabpanel",
          id: `dim-panel-${active.id}`,
          "aria-labelledby": `dim-tab-${active.id}`
        }, h2(WeixinSettingsTab, { rpcCall: weixinRpcCall }))
      )
    )
  );
}
function apply(ctx) {
  ctx.effect(
    () => ctx.locale.register(IM_LOCALE_NAMESPACE, { zh, en }),
    "weixin-settings: bilingual dictionaries"
  );
  const t = ctx.locale.bind(IM_LOCALE_NAMESPACE);
  setImTranslator(t);
  ctx.effect(() => {
    const disposers = [
      installWeixinStyles(),
      installImStyles()
    ];
    return () => {
      for (const dispose of disposers.reverse()) dispose();
    };
  }, "weixin-settings: install channel styles");
  const weixinRpcCall = (endpoint, payload, signal) => ctx.connection.rpc.call(WEIXIN_RPC_CHANNEL, endpoint, payload, signal);
  const workspaceDirectoryPicker = Object.freeze({
    listDirectory: (path, signal) => ctx.workspaces.listDirectory(path, signal),
    pickDirectory: () => ctx.workspaces.pickDirectory()
  });
  ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
    name: "settings.plugins.tab",
    id: "weixin",
    order: 20,
    label: () => t("\u5FAE\u4FE1\u673A\u5668\u4EBA"),
    locale: IM_LOCALE_NAMESPACE,
    inject: () => ({
      weixinRpcCall,
      workspaceDirectoryPicker
    })
  }, IMSettingsTab));
}

    return module.exports;
  }
});
