// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  if (window.innerWidth < 1024) {
    hamburger.classList.toggle("hamburger-active");
    navmenu.classList.toggle("hidden");
  }
});

// Animated Text
const phrases = ["Graphic Design", "UI Design", "Creative Visual"];
let currentPhraseIndex = 0;

function changeText() {
  const animatedTextElement = document.querySelector(".animated-text");
  animatedTextElement.classList.add("hidden");

  setTimeout(() => {
    animatedTextElement.textContent = phrases[currentPhraseIndex];
    animatedTextElement.classList.remove("hidden");
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }, 500);
}

setInterval(changeText, 3000);
