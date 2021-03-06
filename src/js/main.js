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

var swiper = new Swiper(".swiper__products", {
  slidesPerView: 2,
  slidesPerColumn: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    720: {
      slidesPerColumnFill: "row",
      slidesPerView: 3,
      // slidesPerColumn: 2,
      spaceBetween: 30,
    },
    1140: {
      slidesPerColumnFill: "row",
      slidesPerView: 4,
      // slidesPerColumn: 2,
      spaceBetween: 30,
    },
  },
});

// // ---------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// // ---------------------

var swiper = new Swiper(".swiper__reviews", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    loop: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
