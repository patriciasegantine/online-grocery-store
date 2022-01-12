import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

export default function reviewSwiper() {
  const swiper = new Swiper('.review-slider', {
    loop: true,
    autoplay: true,
    grabCursor: true,

    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },


    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },

      1200: {
        slidesPerView: 4,
      },
    },
  });
}
