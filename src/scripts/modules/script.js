'use strict';

define(['jquery'], function($) {
	function _registerEvents() {
		$('#menuToggle').on('click', function() {
		  $(".collapse").toggle();
		})
	}

	return {
		init: function() {
			_registerEvents();
		}
	}
});
