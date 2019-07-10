'use strict';

import Swiper from '../vendors/swiper.min.js';

  // Main Swiper
var mainSwiper = new Swiper(
  '#mainSlider',
  {
    spaceBetween: 0,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 7000,
    autoplayDisableOnInteraction: true
  }
);
mainSwiper.stopAutoplay();

export default mainSwiper;
