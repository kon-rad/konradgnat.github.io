$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky');
}
};

var stickySidebarTop = $('.sidebar-stick').offset().top;

var stickySidebar = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop  > (stickySidebarTop - 103)) {
    $('.sidebar-stick').addClass('sticky-sb');
} else {
    $('.sidebar-stick').removeClass('sticky-sb');
}
};

stickyNav();
stickySidebar();

$(window).scroll(function() {
  stickyNav();
  stickySidebar();
});
});
