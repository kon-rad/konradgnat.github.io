$(document).ready(function(){

/*
 * ENTER/RETURN KEY FUNCTIONALITY
 */
  $("#searchTerm").keypress(function(e){
    if (e.keyCode === 13) {
      $("#output").empty();
      searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
      + searchTerm + "&format=json&callback=?"
      wikiSearch(url);
    }
  });

/*
 * SEARCH BUTTON CLICK CALLS WIKISEARCH FUNCTION WITH ENTERED SEARCH TERM
 */

  $("#searchButton").on("click", function() {
    $("#output").empty();
    searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
    + searchTerm + "&format=json&callback=?"
    wikiSearch(url);
  });

/*
 * RANDOM BUTTON CLICK LINKS TO RANDOM WIKI PAGE
 */

  $('#random').click(function() {
    location.href="https://en.wikipedia.org/wiki/Special:Random";
  });

});

/*
 * WIKI SEARCH FUNCTION SENDS AJAX REQUEST TO WIKI API
 */

 function wikiSearch(url) {
  $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: 'json',
    success: function(data, status, jqXHR) {
      for(var i = 0; i < data[1].length; i++) {
        $("#output").append("<div><div class='well'><a href=" + data[3][i] +
        "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] +
        "</p></a></div></div>");
      }
  }
});
};
