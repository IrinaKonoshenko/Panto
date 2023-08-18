import "./style.css";

const header = document.querySelector("header");

window.onscroll = function () {
  if (window.scrollY > 0) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
};

const swiper = new Swiper(".swiper.swiper1", {
  spaceBetween: 42,
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".abouthero__block-next",
    prevEl: ".abouthero__block-prev",
  },
});

const swiper2 = new Swiper(".swiper.swiper2", {
  spaceBetween: 39,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".s-next",
    prevEl: ".s-prev",
  },
});
