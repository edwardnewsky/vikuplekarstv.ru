let scrollpos = window.scrollY;
const header = document.querySelector("header");
const burger = header.querySelector(".burger");
const menu = header.querySelector(".menu");
const contact = header.querySelector(".header__contact");

const toggleMenu = () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    contact.style.zIndex = "3";
    console.log(menu.style.display);
  } else {
    menu.style.display = "flex";
    contact.style.zIndex = "auto";
    console.log(menu.style.display);
  }
};

// Show menu onClick burger
burger.addEventListener("click", toggleMenu);

// // ---------------------
