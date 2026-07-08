// ==ShimX==
// @name        My Script
// @description 脚本描述
// @version     1.0.0
// @author
// @layer       user
// ==/ShimX==

(async () => {
  if (!(await shimxApi.ready())) return;

  // 在这里编写你的注入逻辑
  console.log('[MyScript] loaded');
})();
