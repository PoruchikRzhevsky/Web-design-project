const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  resizeReInit: true,
  allowTouchMove: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function () {
      return '<span class="swiper-pagination-bullet pagination__button">' + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

window.addEventListener('resize', function(){
  var ww = window.screen.width;
  if (ww > 1250) swiper.params.slidesPerView = 3;
  if (ww > 1024 && ww<=1250) swiper.params.slidesPerView = 2;
  if (ww <= 1024) swiper.params.slidesPerView = 1;
});