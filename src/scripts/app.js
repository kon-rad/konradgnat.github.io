'use strict';

define(['jquery', 'swiper', 'swiperJquery', 'swiperUmd', 'modules/lazyLoad', 'modules/map'], function($, Swiper, swiperJquery, swiperUmd, lazyLoad, map) {

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          slidesPerView: 1
      });
	lazyLoad.init();

	return {
		init: function () {
			map.initMap();
		}
	}
})













