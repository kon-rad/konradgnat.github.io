'use strict';

define(['swiper', 'swiperUmd', 'swiperJquery'], function(Swiper) {

  // Main Swiper
  var mainSwiper = new Swiper('#mainSlider', {
      spaceBetween: 0,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 7000,
      autoplayDisableOnInteraction: true
  });
  mainSwiper.stopAutoplay();

  return mainSwiper;


});