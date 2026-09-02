// ========== 主题切换 ==========
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) root.dataset.theme = saved;

const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

function updateIcon() {
  if (icon) icon.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
}
updateIcon();

if (toggle) {
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
    updateIcon();
  });
}

// ========== 页脚年份 ==========
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ========== 阅读进度条 ==========
const progress = document.getElementById("progress");
window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max ? scrollY / max : 0})`;
  },
  { passive: true }
);

// ========== 修复滚动渐显（.reveal） ==========
// 1. 创建 IntersectionObserver —— 持续监听，不取消观察
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // 注意：此处不调用 unobserve，持续监听以防类被意外移除
      }
    });
  },
  { threshold: 0.1 }
);

// 2. 初始绑定所有 .reveal 元素
function observeRevealElements() {
  document.querySelectorAll(".reveal:not([data-observed])").forEach((el) => {
    observer.observe(el);
    el.dataset.observed = "true"; // 标记已观察，避免重复绑定
  });
}
observeRevealElements();

// 3. 监听动态新增的内容（PJAX / AJAX / 无限滚动）
const mutationObserver = new MutationObserver(() => {
  observeRevealElements();
});
mutationObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

// 4. 页面完全加载后，立即检查一次，避免因后台标签页导致漏触发
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
    }
  });
});
