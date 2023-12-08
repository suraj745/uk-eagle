const homeSwiper = new Swiper(".home-swiper-main", {
  spaceBetween: 30,
  effect: "fade",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

const serviceSwiper = new Swiper(".service-swiper-main", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: "infinite",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
