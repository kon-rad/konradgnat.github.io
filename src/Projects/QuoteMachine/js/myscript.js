$(document).ready(function() {

  /* Generate New Quote function */

  $('#newQuote').on('click', function() {
    $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json) {
      var html = "";
      var authorHtml = "";
      html += json.quoteText;
      authorHtml += json.quoteAuthor;
      if (authorHtml == "")
        authorHtml = "Author Unknown";
       $('#quote').html(html);
      $('#author').html(authorHtml);
    });
  });


  /* Tweet out function */

  $('#tweet').on('click', function(){
    var tweet = document.getElementById('quote').textContent + " - " + document.getElementById('author').textContent;
    var tweetURL = "https://twitter.com/intent/tweet?text=" + tweet;
   window.open(tweetURL);

  });
    });
