$(document).ready(function() {
  $("nav a.trigger").click(function() {
    $(".menu").show();
  });
  $(".menu a, .play, .rooms, header, .bravo").click(function() {
    $(".menu").hide();
  });
});