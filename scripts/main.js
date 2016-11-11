var top_header = '';
$(document).ready(function(){
  top_header = $('.parallax-scroll');
});
$(window).scroll(function () {
  var st = $(window).scrollTop(); 
  top_header.css({'background-position':'50%' + (st*.3)+"px"});
});
