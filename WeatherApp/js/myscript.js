$(document).ready(function() {

  var latlon;
  var getLocation;
  var getWeatherByCity;
  var units = "imperial";
  var weatherAPI = "";
  var cityName;
  var imageURL;
  var showPosition;
  var tempSymbol = "℉";
  var symbolHum = "%";

  /* SWITCH BACK TO CELSIUS */
  $("#metric").on("click", function() {
     units = "metric";
        tempSymbol = "℃";
    getLocation();
      });

  /* SWITCH BACK TO FAHRENHEIT */
  $("#imperial").on("click", function() {
        units = "imperial";
        tempSymbol = "℉";
    getLocation()
      });

  /* SEARCH CITY NAME FUNCTION*/
  $("#cityButton").click(function() {
   cityName = $("#city").val();
    getWeatherByCity(cityName);
  });

  /* GET USER LOCATION FUNCTION */

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
       var x = "Geolocation is not supported by this browser.";
       alert('x');
    }
}

getLocation();

  /* GET WEATHER BY USER LOCATION */

function showPosition(position) {

    latlon = position.coords.latitude + "&lon=" + position.coords.longitude;

    var weatherAPI = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" +
      latlon + "&units=" + units + "&APPID=00e2913c08352690d9e8cbca016ab19f";



  $.getJSON(weatherAPI, function(json) {
  $("#location").html(json.name + " " + json.sys.country);
      $("#humidity").html(json.main.humidity + symbolHum);
      $("#description").html(json.weather[0].description);
      $("#temp").html(json.main.temp + tempSymbol);

      if (json.weather[0].icon == '10d')//rain
        imageURL = "url('http://www.artifacting.com/blog/wp-content/uploads/2012/10/Rain-Room.jpg')";
      else if (json.weather[0].icon == '50d')//mist day
        imageURL = "url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Westminster_fog_-_London_-_UK.jpg')";
        else if (json.weather[0].icon == '01d')//clear sky
        imageURL = "url('http://cdn.paper4pc.com/images/clear-sky-wallpaper-3.jpg')";
        else if (json.weather[0].icon == '02d')//few clouds
        imageURL = "url('https://s-media-cache-ak0.pinimg.com/736x/ae/d3/72/aed3729821b519a1e4d0907c81fc1e1a.jpg')";
        else if (json.weather[0].icon == '03d')//scattered clouds
        imageURL = "url('https://c1.staticflickr.com/3/2106/1909487867_de140c7eb8_b.jpg')";
        else if (json.weather[0].icon == '04d')//broken clouds
        imageURL = "url('http://www.borealisimages.ca/galleries/2008/spring/photos/14_Light_streaks_through_broken_cloud_wwwborealisimagesca.jpg')";
        else if (json.weather[0].icon == '09d')//shower rain
        imageURL = "url('https://rayli.net/blog/wp-content/uploads/2012/03/rain_floor-1.jpg')";
        else if (json.weather[0].icon == '10d')//rain
        imageURL = "url('http://cdn.abclocal.go.com/content/wtvd/images/cms/automation/images/511280_1280x720.jpg')";
        else if (json.weather[0].icon == '11d')//thunderstorm
        imageURL = "url('http://3.bp.blogspot.com/-pHv5T4iewKA/UaMN86nf4lI/AAAAAAAAAhg/G2JSWQNEfrU/s1600/1.png')";
        else if (json.weather[0].icon == '13d')//snow
        imageURL = "url('https://www.japantoday.com/images/size/x/2013/01/snowintokyo.jpg')";
        else if (json.weather[0].icon == '01n')//cleaer sky night
        imageURL = "url('https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg')";
        else if (json.weather[0].icon == '01n')//cleaer sky night
        imageURL = "url('https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg')";
        else if (json.weather[0].icon == '02n')//few clouds night
        imageURL = "url('https://polysyllabicprofundities.files.wordpress.com/2013/01/clouds.jpg')";
        else if (json.weather[0].icon == '03n')//scattered clouds night
        imageURL = "url('https://trentsthoughts.files.wordpress.com/2011/05/night_sky.jpg')";
        else if (json.weather[0].icon == '04n')//broken clouds sky night
        imageURL = "url('http://3.bp.blogspot.com/-oHQAaVLuOI4/UfEtlvesXZI/AAAAAAAAWbU/YRKlIbUdNh8/s1600/1+moon.JPG')";
        else if (json.weather[0].icon == '09n')//shower rain night
        imageURL = "url('https://i.ytimg.com/vi/TNshD1b4q7U/maxresdefault.jpg')";
        else if (json.weather[0].icon == '10n')//rain night
        imageURL = "url('https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg')";
        else if (json.weather[0].icon == '11n')//thunderstorm night
        imageURL = "url('https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg')";
        else if (json.weather[0].icon == '13n')//snow night
        imageURL = "url('http://www.twitrcovers.com/wp-content/uploads/2013/07/Snow-Night-l.jpg')";
        else if (json.weather[0].icon == '50n')//mist night
        imageURL = "url('http://campoutkid.com/wp-content/uploads/2012/03/Astoria-Park-at-Night-in-Mist.jpg')";

      $(".jumbotron").css({"background-image":imageURL, "background-size":"100%", "background-repeat":"no-repeat"});

    });

}



  /* GET WEATHER BY CITY NAME FUNCTION*/

  function getWeatherByCity(citName) {

   weatherAPI = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&APPID=00e2913c08352690d9e8cbca016ab19f";




  $.getJSON(weatherAPI, function(json) {
  $("#location").html(json.name + " " + json.sys.country);
      $("#humidity").html(json.main.humidity + symbolHum);
      $("#description").html(json.weather[0].description);
      $("#temp").html(json.main.temp + tempSymbol);

      if (json.weather[0].icon == '10d')//rain
        imageURL = "url('http://www.artifacting.com/blog/wp-content/uploads/2012/10/Rain-Room.jpg')";
      else if (json.weather[0].icon == '50d')//mist day
        imageURL = "url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Westminster_fog_-_London_-_UK.jpg')";
        else if (json.weather[0].icon == '01d')//clear sky
        imageURL = "url('http://cdn.paper4pc.com/images/clear-sky-wallpaper-3.jpg')";
        else if (json.weather[0].icon == '02d')//few clouds
        imageURL = "url('https://s-media-cache-ak0.pinimg.com/736x/ae/d3/72/aed3729821b519a1e4d0907c81fc1e1a.jpg')";
        else if (json.weather[0].icon == '03d')//scattered clouds
        imageURL = "url('https://c1.staticflickr.com/3/2106/1909487867_de140c7eb8_b.jpg')";
        else if (json.weather[0].icon == '04d')//broken clouds
        imageURL = "url('http://www.borealisimages.ca/galleries/2008/spring/photos/14_Light_streaks_through_broken_cloud_wwwborealisimagesca.jpg')";
        else if (json.weather[0].icon == '09d')//shower rain
        imageURL = "url('https://rayli.net/blog/wp-content/uploads/2012/03/rain_floor-1.jpg')";
        else if (json.weather[0].icon == '10d')//rain
        imageURL = "url('http://cdn.abclocal.go.com/content/wtvd/images/cms/automation/images/511280_1280x720.jpg')";
        else if (json.weather[0].icon == '11d')//thunderstorm
        imageURL = "url('http://3.bp.blogspot.com/-pHv5T4iewKA/UaMN86nf4lI/AAAAAAAAAhg/G2JSWQNEfrU/s1600/1.png')";
        else if (json.weather[0].icon == '13d')//snow
        imageURL = "url('https://www.japantoday.com/images/size/x/2013/01/snowintokyo.jpg')";
        else if (json.weather[0].icon == '01n')//cleaer sky night
        imageURL = "url('https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg')";
        else if (json.weather[0].icon == '01n')//cleaer sky night
        imageURL = "url('https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg')";
        else if (json.weather[0].icon == '02n')//few clouds night
        imageURL = "url('https://polysyllabicprofundities.files.wordpress.com/2013/01/clouds.jpg')";
        else if (json.weather[0].icon == '03n')//scattered clouds night
        imageURL = "url('https://trentsthoughts.files.wordpress.com/2011/05/night_sky.jpg')";
        else if (json.weather[0].icon == '04n')//broken clouds sky night
        imageURL = "url('http://3.bp.blogspot.com/-oHQAaVLuOI4/UfEtlvesXZI/AAAAAAAAWbU/YRKlIbUdNh8/s1600/1+moon.JPG')";
        else if (json.weather[0].icon == '09n')//shower rain night
        imageURL = "url('https://i.ytimg.com/vi/TNshD1b4q7U/maxresdefault.jpg')";
        else if (json.weather[0].icon == '10n')//rain night
        imageURL = "url('https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg')";
        else if (json.weather[0].icon == '11n')//thunderstorm night
        imageURL = "url('https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg')";
        else if (json.weather[0].icon == '13n')//snow night
        imageURL = "url('http://www.twitrcovers.com/wp-content/uploads/2013/07/Snow-Night-l.jpg')";
        else if (json.weather[0].icon == '50n')//mist night
        imageURL = "url('http://campoutkid.com/wp-content/uploads/2012/03/Astoria-Park-at-Night-in-Mist.jpg')";

      $(".jumbotron").css({"background-image":imageURL, "background-size":"100%", "background-repeat":"no-repeat"});

    });


}


});
 
