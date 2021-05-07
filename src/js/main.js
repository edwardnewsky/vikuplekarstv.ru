let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const burger = header.querySelector(".burger");
const menu = header.querySelector(".menu");

const toggleMenu = () => {
  menu.classList.toggle("d-none");
};
const hideMenu = () => {
  menu.classList.add("d-none");
};

const add_class_on_scroll = () => burger.classList.add("d-none");
const remove_class_on_scroll = () => burger.classList.remove("d-none");

// Show burger onScroll
window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    remove_class_on_scroll();
  } else {
    add_class_on_scroll();
    hideMenu();
  }
});

// Show menu onClick burger
burger.addEventListener("click", toggleMenu);
