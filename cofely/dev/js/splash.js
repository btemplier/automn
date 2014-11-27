var radix = 10;
var logoindex = 0;
var logomax= 91
function animateImage() {
	//console.log('animateImage');
	$("img.animated").each(function (Index) {
		if (0 && !$(this).is(":visible")) {
			var intervalID = parseInt($(this).attr("intervalid"),radix);
			clearInterval(intervalID);
		} else {
			var max = parseInt($(this).attr("max"),radix);
			var pattern = $(this).attr("pattern");
			var index = parseInt($(this).attr("index"),radix);
			index++;
			index = ('00000' + index).substr(-5); 
			var src = pattern.replace("#", index);
			$(this).attr("index", index);
			$(this).attr("src", src);
			if (index == max) {
				var intervalID = parseInt($(this).attr("intervalid"),radix);
				clearInterval(intervalID);
				$(this).removeClass('animated');
				$(this).trigger('animationFinished');
				//index = 0;
				return;
			}
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

$.fn.rewindAnim = function(){
	var src = $(this).attr("pattern");
	src = src.replace("#", "00000");
	$(this).attr("src", src);
}
$.fn.startAnim = function(){
	$(this).addClass('animated');
	var interval = $(this).attr("interval");
	$(this).attr("index", "0");
	var intervalID = setInterval(function () { animateImage(); }, interval);	
	$(this).attr("intervalid", intervalID);
	//$(this).show();
	$(this).css('display','block');
	//console.log('show');
}

$(document).ready(function(){
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
	//var slideinterval = setInterval(nextSlide,5000);

	var chillduration = 1000;
	$('img').bind('animationFinished',function(e){
		if(e.target==$("img#in")[0]){
			setTimeout(function(){
				$('img#out').startAnim();
				$("img#in").rewindAnim();
				$("img#in").hide();
				
			},chillduration);
		}else{
			setTimeout(function(){
				$('img#in').startAnim();
				$("img#out").rewindAnim();
				$("img#out").hide();
			},chillduration);
		}
	});
	$('img#in').startAnim();
});


