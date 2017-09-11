

define(['jquery', 'swiper', 'swiperJquery', 'swiperUmd', 'modules/lazyLoad', 'modules/map', 'modules/script'], function($, Swiper, swiperJquery, swiperUmd, lazyLoad, map, script) {


	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
          // Navigation arrows
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          slidesPerView: 1
      });

	lazyLoad.init();


	return {
		init: function () {

			console.timeEnd("start_to_end");
			map.initMap();
		}
	}
})













