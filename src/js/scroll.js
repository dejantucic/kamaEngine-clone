const links = document.querySelectorAll(".links");
// const scroolCrossword = document.querySelector("#footer__link-cross");
const Crossword = document.querySelector("#crossword");
const Wordsearch = document.querySelector("#word-search");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  console.log(e.target);
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
