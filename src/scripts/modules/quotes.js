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

function copyQuote2() {
  /* Get the text field */
  console.log('2 here');
  var quote = $('#quote').text();
  var author = $('#author').text();
  const copy = `"${quote}" - ${author}`;
  var textArea = document.createElement('textarea');
  textArea.value = copy;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); /* For mobile devices */

  /* Select the text field */

  /* Copy the text inside the text field */
  document.execCommand('copy');
  textArea.remove();
}

$(document).ready(() => {
  if (!document.getElementById('newQuote')) {
    return;
  }
  newQuote();

  document.getElementById('website_wrapper').style.visibility =
    'visible';
  document.getElementById('newQuote').onclick = newQuote;
  document.getElementById(
    'copyQuoteToClipboard',
  ).onclick = copyQuote2;
});
