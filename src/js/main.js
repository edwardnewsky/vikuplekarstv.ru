let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const burger = header.querySelector(".burger");
const menu = header.querySelector(".menu");

const toggleMenu = () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    console.log(menu.style.display);
  } else {
    menu.style.display = "flex";
    console.log(menu.style.display);
  }
};

// Show menu onClick burger
burger.addEventListener("click", toggleMenu);

// // ---------------------
