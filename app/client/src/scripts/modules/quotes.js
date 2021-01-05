'use strict';

/* Generate New Quote function */
const newQuote = () => {
    $.getJSON(
        'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
        (data) => {
            if (!data) {
                console.error(
                    'Error: Could not fetch quote from forismatic api.'
                );
                return;
            }

            $('#quote').html(data.quoteText);
            $('#author').html(
                data.quoteAuthor ? data.quoteAuthor : 'Author Unknown'
            );
        }
    );
};

const copyQuote = () => {
    const quote = $('#quote').text();
    const author = $('#author').text();
    const copy = `"${quote}" - ${author}`;

    // create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = copy;
    document.body.appendChild(textArea);
    // select can only be called on a text area field
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    // copy to clipboard
    document.execCommand('copy');

    textArea.remove();
};

$(document).ready(() => {
    if (!document.getElementById('newQuote')) {
        return;
    }
    newQuote();

    document.getElementById('website_wrapper').style.visibility = 'visible';
    document.getElementById('newQuote').onclick = newQuote;
    document.getElementById('copyQuoteToClipboard').onclick = copyQuote;
});
