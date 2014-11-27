$(document).ready(function(){

  // scroll
  $(".formation").mCustomScrollbar();
  $(".works").mCustomScrollbar();

  // position block contenu
  /*
  var heightContainer = 0;
  $(".container").each(function(index) {
    if (index>0) {
      heightContainer += $(this).prev().outerHeight(true)+50;
      $(this).css('top', heightContainer+'px');
    }
  });
  */

  // togle header/contenu
  $("nav ul li").click(function(event) {
    var id = $(this).attr("id");
    $('.container .content').addClass('close');
    $('.container.'+id).find('.content').toggleClass('close');
  });
  $(".container .title").click(function(event) {
    event.preventDefault();
    $(this).parent().find('.content').toggleClass('close');
  });

  // google map
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(48.792852, 2.343900),
      mapTypeId: 'satellite',
      zoom: 17
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
