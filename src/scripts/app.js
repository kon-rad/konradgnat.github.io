'use strict';

define(['jquery'], function($) {

	return {
		init: function () {
			if(document.getElementById('map')) {
				require(['modules/map']);
				map.initMap();
			}

			if(document.getElementById('mainSlider')) {
				require(['swiper', 'swiperJquery', 'swiperUmd']);
  				require(['modules/quotes', 'modules/lazyLoad']);
			}
		}
	}
})













