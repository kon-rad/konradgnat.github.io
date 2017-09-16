'use strict';

define(['jquery', 'swiper', 'swiperJquery', 'swiperUmd', 'modules/lazyLoad', 'modules/map'], function($, Swiper, swiperJquery, swiperUmd, lazyLoad, map) {

	return {
		init: function () {
			if(document.getElementById('map')) 
				map.initMap();
		}
	}
})













