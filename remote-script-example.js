// ==ShimX==
// @name        远程脚本示例
// @description 示例脚本:等待 shimxApi 就绪后弹出加载提示
// @version     1.0.0
// @author      dugongzi
// @layer       user
// ==/ShimX==

(async () => {
  if (!window.shimxApi) {
    console.warn('[RemoteScriptExample] shimxApi not found');
    return;
  }

  const ready = await window.shimxApi.ready();
  if (!ready) {
    console.warn('[RemoteScriptExample] shimx bridge timeout');
    return;
  }

  window.shimxApi.toast('远程脚本示例已加载', 'success');
  console.log('[RemoteScriptExample] loaded');
})();
