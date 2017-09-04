    function myFunction(x) {
      x.classList.toggle("change");
      $(".collapse").toggle();
    }

requirejs([
  'jquery-3.2.1.min',
  'swiper.jquery.min',
  'swiper.min',
  'swiper.jquery.umd.min'
  ], function() {

    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
          // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      slidesPerView: 1
    });




    if ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
      !('isIntersecting' in IntersectionObserverEntry.prototype)) {

      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0
        }
      })
  }

  let webp = false;

  if($('html').hasClass('webp')) webp = true;

  console.log(webp);

  const imgElements = [ ...document.querySelectorAll( '.lazyload' ) ];

  let observer = new IntersectionObserver( onChange, {
    threshold: [ 0.0 ],
  });

  function onChange( changes ) {

    changes.forEach( change => {

      if ( change.isIntersecting ) {

        change.target.classList.add( 'visible' );
        if(!webp)
          change.target.src = change.target.dataset.src;
        else
          change.target.src = change.target.dataset.webp;

        observer.unobserve( change.target );
      }
    });
  }


  const createObserver = function () {

    imgElements.forEach( img => {

      observer.observe( img );
    });
  };


  window.addEventListener("load", () => {
    createObserver();
  }, false);
    createObserver();



  console.timeEnd("start_to_end");
})


