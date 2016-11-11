
var top_header = '';
$(document).ready(function(){
  top_header = $('.item');
  quoteCarousel = $('#parallax-background');

});
$(window).scroll(function () {
  var st = $(window).scrollTop();
  console.log(st);
  top_header.css({'background-position':'50%' + (st*.3)+"px"});
  quoteCarousel.css({'background-position':'50%' + (st*(.3))+"px"});
});
