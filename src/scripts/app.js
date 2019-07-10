'use strict';


export default {
	init: function () {

		if (document.getElementById('mainSlider')) {
			require(['swiper', 'swiperJquery', 'swiperUmd']);
				require(['modules/quotes', 'modules/lazyLoad']);
		}
	}
}













