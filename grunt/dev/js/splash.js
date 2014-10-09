var radix = 10;
var logoindex = 0;
var logomax= 91
function animateImage() {
	$("img.animated").each(function (Index) {
		if (!$(this).is(":visible")) {
			var intervalID = parseInt($(this).attr("intervalid"),radix);
			clearInterval(intervalID);
		} else {
			var max = parseInt($(this).attr("max"),radix);
			var pattern = $(this).attr("pattern");
			var index = parseInt($(this).attr("index"),radix);
			index++;
			if (index > max) {
				var intervalID = parseInt($(this).attr("intervalid"),radix);
				clearInterval(intervalID);
				$(this).removeClass('animated');
				$(this).trigger('animationFinished');
				index = 0;
			}
			index = ('00000' + index).substr(-5); 
			var src = pattern.replace("#", index);
			$(this).attr("index", index);
			$(this).attr("src", src);
		}
	});
}
		
function initialiseAnimatedImages() {
	$("img.animated").each(function (Index) {
		var interval = $(this).attr("interval");
		$(this).attr("index", "0");
		var intervalID = setInterval(function () { animateImage(Index); }, interval);
		$(this).attr("intervalid", intervalID);
	});
}
function stopAnimatedImages(Parent) {
    $("img", Parent).each(function () {
        var intervalID = $(this).attr("intervalid");
        if (intervalID) {
            clearInterval(parseInt(intervalID,radix));
        }
    });
}


$.fn.startAnim = function(){
	//console.log($(this));
		console.log('déjà ?');
	$(this).addClass('animated');
	var interval = $(this).attr("interval");
	$(this).attr("index", "0");
	var intervalID = setInterval(function () { animateImage(); }, interval);
	//var intervalID = setInterval( $(this).animateRoutine, interval);
	$(this).attr("intervalid", intervalID);
}
/*
$.fn.animateRoutine = function() {
		if (!$(this).is(":visible")) {
			var intervalID = parseInt($(this).attr("intervalid"),radix);
			clearInterval(intervalID);
		} else {
			var max = parseInt($(this).attr("max"),radix);
			var pattern = $(this).attr("pattern");
			var index = parseInt($(this).attr("index"),radix);
			index++;
			if (index > max) {
				var intervalID = parseInt($(this).attr("intervalid"),radix);
				clearInterval(intervalID);
				$(this).hide();
				return;
			}
			index = ('00000' + index).substr(-5); 
			var src = pattern.replace("#", index);
			$(this).attr("index", index);
			$(this).attr("src", src);
		}
	//});
}
*/

$(document).ready(function(){
	/*
	$('.slideshow').bind('click',function(){
		nextSlide();
	});
	*/
	function nextSlide(){
		var $next;
		var $slide = $('.slideshow');
		if($('img.current',$slide).next().length > 0){
			$next = $('img.current',$slide).next();	
		}else{
			$next = $('.slideshow img').eq(0);
		}
		$slide.css('backgroundImage','url('+$('img.current',$slide).attr('src')+')');
		$('img.current',$slide).removeClass('current');
		$next.addClass('current');
	}
	var slideinterval = setInterval(nextSlide,5000);


	var chillduration = 2000;
	$('img').bind('animationFinished',function(e){
		console.log('ah '+chillduration);
		if(e.target==$("img#in")[0]){
			$("img#in").hide();
			$("img#out").show();
			setTimeout(function(){$('img#out').startAnim()},chillduration);
		}else{
			$("img#out").hide();
			$("img#in").show();
			setTimeout(function(){$('img#in').startAnim()},chillduration);
		}
	})

	$('img#in').startAnim();




});


