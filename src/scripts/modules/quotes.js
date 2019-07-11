'use strict';

/* Generate New Quote function */
function newQuote() {
  $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    function (data) {
      if (!data) {
        console.log('Something went wrong');
        return;
      }

      $('#quote').html(data.quoteText);
      $('#author').html(data.quoteAuthor ? data.quoteAuthor : 'Author Unknown');
    });
}

newQuote();
document.getElementById('website_wrapper').style.visibility = 'visible';
document.getElementById('newQuote').onclick = newQuote;
