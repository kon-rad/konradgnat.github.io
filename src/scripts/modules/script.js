'use strict';

define('script', ['jquery'], function($) {

	function myFunction(x) {
	  x.classList.toggle("change");
	  $(".collapse").toggle();
	}
	return {
		myFunction: myFunction
	}
})