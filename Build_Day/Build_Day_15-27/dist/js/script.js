
function toggleAbout() {
  var aboutClasses = document.getElementById("about").classList;
  let aboutBtnClasses = document.getElementById("about-btn").classList;

  if (aboutClasses.contains("visible")) {
    aboutClasses.remove("visible");
    aboutBtnClasses.remove("active");
  } else {
    aboutClasses.add("visible");
    aboutBtnClasses.add("active");
  }
}


let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});

// run hasScrolled() and reset didScrolll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If current position > last position AND scrolled past navbar...
  if (st > lastScrollTop && st > navbarHeight) {

    // Scroll Down
    $('header').removeClass('nav-down').addClass('hide');

  } else {

    // Scroll up
    // f did not scroll past teh document (possible on mac)...

    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('hide').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}
