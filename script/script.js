const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.style.borderBottom = "1px solid #686868";
  } else {
    header.style.borderBottom = "none";
  }
};
