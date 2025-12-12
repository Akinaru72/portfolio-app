const openBtn = document.querySelector(".header-open-button");
const closeBtn = document.querySelector(".close-modal-icon");

const menuBtn = document.querySelector(".header-menu-button");
const nav = document.querySelector(".header-nav");

const modWindow = document.querySelector(".modal-window");
const closeLinkWin = document.querySelectorAll(".modal-menu, .modal-menu-wtg");

const closeLinkNav = document.querySelector(".modal-menu-link");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

closeLinkNav.addEventListener("click", () => {
  nav.classList.renove("is-open");
});

openBtn.addEventListener("click", () => {
  modWindow.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  modWindow.classList.remove("is-open");
});

closeLinkWin.forEach((link) => {
  link.addEventListener("click", () => {
    modWindow.classList.remove("is-open");
  });
});
