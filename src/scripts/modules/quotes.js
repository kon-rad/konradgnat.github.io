'use strict';

/* Generate New Quote function */
const newQuote = () => {
  $.getJSON(
    'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    (data) => {
      if (!data) {
        console.error(
          'Error: Could not fetch quote from forismatic api.',
        );
        return;
      }

      $('#quote').html(data.quoteText);
      $('#author').html(
        data.quoteAuthor ? data.quoteAuthor : 'Author Unknown',
      );
    },
  );
};

const copyQuote = () => {
  var quote = $('#quote').text();
  var author = $('#author').text();
  const copy = `"${quote}" - ${author}`;
  navigator.clipboard.writeText(copy).then(
    function () {
      // console.log('Async: Copying to clipboard was successful!');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    },
  );
};

$(document).ready(() => {
  if (!document.getElementById('newQuote')) {
    return;
  }
  newQuote();

  document.getElementById('website_wrapper').style.visibility =
    'visible';
  document.getElementById('newQuote').onclick = newQuote;
  document.getElementById('copyQuoteToClipboard').onclick = copyQuote;
});
