'use strict';

define(['jquery'], function($) {
	console.log('heres scriptssss');

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
})