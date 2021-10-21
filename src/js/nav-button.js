const hamBtn = document.querySelector(".header__hamburger-menu");
const showNav = document.querySelector(".header__navigation-mobile");

hamBtn.addEventListener("click", () => {
  showNav.classList.toggle("show");
  hamBtn.classList.toggle("open");
});
