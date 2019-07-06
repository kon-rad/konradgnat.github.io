'use strict';

define(['jquery', 'mainSlider'], function ($, mainSlider) {

  /* Generate New Quote function */
  function newQuote() {
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      function (data) {
        if (data === null) {
          console.log('Something went wrong');
          return;
        }

        var html = "";
        var authorHtml = "";
        html += data.quoteText;
        authorHtml += data.quoteAuthor;
        if (authorHtml == "")
          authorHtml = "Author Unknown";
        $('#quote').html(html);
        $('#author').html(authorHtml);
      });
  }

  newQuote();

  var getNewQuote = document.getElementById('newQuote');

  mainSlider.startAutoplay();
  document.getElementById('website_wrapper').style.visibility = 'visible';
  getNewQuote.onclick = function () {
    newQuote();
  };
});