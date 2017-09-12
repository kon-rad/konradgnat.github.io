'use strict';

require.config({
  // baseUrl: 'file:///Users/konradgnat/Documents/sites/konradgnat.github.io/src/scripts/modules',
  paths: {
    'async': 'vendors/async',
    'jquery': 'vendors/jquery-3.2.1.min',
    'swiperJquery': 'vendors/swiper.jquery.min',
    'swiper': 'vendors/swiper.min',
    'swiperUmd': 'vendors/swiper.jquery.umd.min',
    'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min.js',
    'intersectionObserver': 'vendors/intersection-observer',
    'modernizr': 'vendors/modernizr-custom'
  },
  shim: {
    bootstrap: {
      deps: 'jquery'
    }
  }
});

require(['app', 'modules/script'], function (app, script) {
  app.init();
  script.init();
  console.log('heres main');
});

// command to run r.js and optimzie js code
// $ node build/r.js -o build/build.config.js