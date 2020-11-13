const slider = document.querySelector('.js-slider');

let swiper = new Swiper(slider, {
  slidesPerView: 3,
  breakpoints: {
    1250: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  resizeReInit: true,
  allowTouchMove: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.js-pagination',
    clickable: true,
    renderBullet: function () {
      return '<span class="swiper-pagination-bullet pagination__button">' + '</span>';
    },
  },
  navigation: {
    nextEl: '.js-slider__control_right',
    prevEl: '.js-slider__control_left',
  },
  keyboard: {
    enabled: true,
  },
});