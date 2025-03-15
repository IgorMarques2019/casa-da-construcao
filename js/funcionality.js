var swiper = new Swiper(".main-banner", {
  spaceBetween: 0,
  slidesPerView: 1,
  effect: "fade",
  lazy: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var products_swipper = new Swiper(".products-banner-swipper", {
  spaceBetween: 0,
  slidesPerView: 3,
  lazy: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
