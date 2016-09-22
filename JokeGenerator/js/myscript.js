$(document).ready(function() {
  //getJoke();
  $("#newJoke").on("click", getJoke);
  $("#tweet").on("click", tweetJoke);

});
 var getJoke = function() {
  $.getJSON("http://api.icndb.com/jokes/random", function(json) {
      var html = "";
      html += json.value.joke;
      $("#joke").html(html);
    });
}

var tweetJoke = function() {
   var tweet = document.getElementById('joke').textContent;
    var tweetURL ="https://twitter.com/share?text=" + encodeURIComponent(tweet);
    // alert(tweetURL);
   window.open(tweetURL);
}
