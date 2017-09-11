'use strict';

require.config({
  paths: {
    'async': 'vendors/async',
    'jquery': 'vendors/jquery-3.2.1.min',
    'swiperJquery': 'vendors/swiper.jquery.min',
    'swiper': 'vendors/swiper.min',
    'swiperUmd':'vendors/swiper.jquery.umd.min',
    'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min.js',
    'intersectionObserver': 'vendors/intersection-observer',
    'modernizr': 'vendors/modernizr-custom' 
  },
  shim: {
    bootstrap: {
      deps: 'jquery'
    }
  }
})

require(['app'], function(app) {
  app.init();
})






// command to run r.js and optimzie js code
// $ node build/r.js -o build/build.config.js


