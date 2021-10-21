let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});
