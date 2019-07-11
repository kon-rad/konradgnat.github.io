'use strict';


  // Main Swiper
var mainSlider = new Swiper(
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
mainSlider.startAutoplay();

