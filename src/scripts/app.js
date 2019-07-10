'use strict';

import $ from './vendors/jquery-3.2.1.min';

export default {
	init: function () {

		if (document.getElementById('mainSlider')) {
			require(['swiper', 'swiperJquery', 'swiperUmd']);
				require(['modules/quotes', 'modules/lazyLoad']);
		}
	}
}













