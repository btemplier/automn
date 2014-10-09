
$(document).ready(function(){
	$('a').click(function(e){	
		url = $(this).attr('href');
		splitedurl = url.split("?");
		if(splitedurl.length>0) vars = splitedurl[1].split('&');
		for(i in vars){
			console.log('soso');
			getvar = vars[i].split("=");
			if(getvar[0] == "fade"){
				e.preventDefault();
				$("html").css('backgroundColor',getvar[1]);
				$("body").fadeOut(600,function(){
					window.location.href = url;
				});
			}
		}
	})
	if(fade){
		$("body").fadeOut(0);
		$("body").fadeIn(600);
	}
});

getvars = window.location.search.replace("?", "");
getvars = getvars.split("&");
for(i in getvars){
	newvar = getvars[i].split("=");
	if (newvar[0] == "fade"){
		var fade = newvar[1];
	}
}
if(fade){
	$("html").css('backgroundColor',fade);
}