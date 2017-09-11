'use strict';

define(['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyA8UtfbT1GSWWG1kmpmwZZ_9xtCnw9zXXg&callback=initMap'], function() {

  function initMap() {

    var sanFran = {
      info: '<strong>San Francisco</strong><br>\
            Vistied on three occasions in winter/spring 2017<br>\
            Participated in DevWeek & GifHack hackathons and 42 April piscine',
      lat: 37.774929,
      long: -122.419416
    }
    var nyc = {
      info: '<strong>New York City</strong><br>\
            Vistied distant family<br>\
            Sightseeing and visiting landmarks',
      lat: 40.712784,
      long: -74.005941  
    }
    var nashville = {
      info: '<strong>Nashville</strong><br>\
            Code for the Kingdom<br>\
            March 2017',
      lat: 36.162664,
      long: -86.781602  
    }
    var london = {
      info: '<strong>London</strong><br>\
            Beautiful city<br>\
            May 2015',
      lat: 51.507351,
      long: -0.127758  
    }
    var lviv = {
      info: '<strong>Lviv</strong><br>\
            Students trip<br>\
            August 2010',
      lat: 49.839683,
      long: 24.029717  
    }
    var krakow = {
      info: '<strong>Krakow</strong><br>\
            Study Abroad<br>\
            August 2011',
      lat: 50.064650,
      long: 19.944980  
    }



    // Data for the markers consisting of a name, a LatLng and a zIndex for the
    // order in which these markers should display on top of each other.
    var travels = [
      [sanFran.info, sanFran.lat, sanFran.long, 0],
      [nyc.info, nyc.lat, nyc.long, 1],
      [nashville.info, nashville.lat, nashville.long, 2],
      [london.info, london.lat, london.long, 3],
      [lviv.info, lviv.lat, lviv.long, 4],
      [krakow.info, krakow.lat, krakow.long, 5]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(41.976816, -87.659916),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < travels.length; i++) {
      var loc = travels[i];
      marker = new google.maps.Marker({
        position: {lat: loc[1], lng: loc[2]},
        map: map,
      });

      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(travels[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
      carouselMap(map, travels, -1);
    }

    function carouselMap(map, travels, i) {
      if (i == travels.length-1)
        i = 0;
      i++;
      setTimeout(function() {
        map.setCenter({lat:travels[i][1], lng:travels[i][2]});
        carouselMap(map, travels, i);
      }, 2000);
    }

  }

  return {
    initMap: initMap

  }

})

    
