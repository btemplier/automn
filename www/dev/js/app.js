$(document).ready(function() {
  $("nav a.trigger").click(function() {
    $(".menu").show();
  });
  $(".menu a").click(function() {
    $(".menu").hide();
  });
});