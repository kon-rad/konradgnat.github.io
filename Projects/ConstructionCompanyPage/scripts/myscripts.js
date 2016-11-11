'use strict';

$(document).ready(function(){
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

  $("#mycarousel").carousel( { interval: 3000 } );

  $("#carouselPause").click(function(){
    $("#mycarousel").carousel('pause');
  });
  $("#carouselPlay").click(function() {
    $("#mycarousel").carousel('cycle');
  });


  /* manually opens reservation modal */
  $('#open-reservation-modal').click(function(){
    $("#reservationModal").modal('show');
  })
  /* manually hides reservation modal */
  $('.hide-reservation-modal').click(function(){
    $('#reservationModal').modal('hide');
  });
  /* manually opens login modal */
  $('#open-login-modal').click(function(){
    $("#loginModal").modal('show');
  })
  /* manually hides login modal */
  $('.hide-login-modal').click(function(){
    $('#loginModal').modal('hide');
  });
});
