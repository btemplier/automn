$(document).ready(function() {
  $("nav").click(function() {
    $("#menu").toggleClass('show');
  });
  $("#menu a, .play, .rooms, header, .bravo, div.dotations").click(function() {
    $("#menu").removeClass('show');
  });
});