// 旧仓库名 → 新仓库名。仓库改名后 GitHub Pages 旧地址不会自动跳转，由这里接管。
(function () {
  var map = {
    "my-html-game": "starfall-homecoming",
    "shangfen-huangli": "ranked-almanac",
    "codex-dual-usage-dashboard": "ai-usage-monitor",
    "money-lunch": "lunch-money"
  };
  var parts = location.pathname.split("/");
  var target = map[parts[1]];
  if (!target) return false;
  parts[1] = target;
  location.replace(parts.join("/") + location.search + location.hash);
  return true;
})();
