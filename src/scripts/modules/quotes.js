'use strict';

define(['jquery', 'mainSlider'], function($, mainSlider) {

  /* Generate New Quote function */

    function newQuote() {
	    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
			function(data) {
				if (data === null) {
					console.log('Something went wrong');
				} else {
				    var html = "";
				    var authorHtml = "";
				    html += data.quoteText;
				    authorHtml += data.quoteAuthor;
				    if (authorHtml == "")
				    	authorHtml = "Author Unknown";
				   	$('#quote').html(html);
				  	$('#author').html(authorHtml);	    
				}
			});    	
    }

    newQuote();

	var modal = document.getElementById('modal');

    modal.style.display = "block";

	var span = document.getElementById("modalClose");

	var getNewQuote = document.getElementById('newQuote');

	span.onclick = function() {
	    modal.style.display = "none";
	    mainSlider.startAutoplay(); 
	}

	getNewQuote.onclick = function() {
	    newQuote();
	}

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
		    mainSlider.startAutoplay(); 
	    }
	}

});