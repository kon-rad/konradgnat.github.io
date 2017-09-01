'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

requirejs(['jquery-3.2.1.min', 'swiper.jquery.min', 'swiper.min', 'swiper.jquery.umd.min'], function () {

  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    slidesPerView: 1
  });

  function myFunction(x) {
    x.classList.toggle("change");
    $(".collapse").toggle();
  }

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && !('isIntersecting' in IntersectionObserverEntry.prototype)) {

    Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
      get: function get() {
        return this.intersectionRatio > 0;
      }
    });
  }

  var webp = false;

  if ($('html').hasClass('webp')) webp = true;

  console.log(webp);

  var imgElements = [].concat(_toConsumableArray(document.querySelectorAll('.lazyload')));

  var observer = new IntersectionObserver(onChange, {
    threshold: [0.0]
  });

  function onChange(changes) {

    changes.forEach(function (change) {

      if (change.isIntersecting) {

        change.target.classList.add('visible');
        if (!webp) change.target.src = change.target.dataset.src;else change.target.src = change.target.dataset.webp;

        observer.unobserve(change.target);
      }
    });
  }

  var createObserver = function createObserver() {

    imgElements.forEach(function (img) {

      observer.observe(img);
    });
  };

  window.addEventListener("load", function () {
    createObserver();
  }, false);

  console.timeEnd("start_to_end");
});