$(document).ready(function(){
  $('.mySlide').slick({
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    onAfterChange : function(index){
     titleOn();
    },
    onBeforeChange : function(index){
     titleDel();
    }
  });
  function titleOn() {
    $('.slick-active .t1').removeClass('hidden');
    $('.slick-active .t1').css("opacity", "1");
    setTimeout(function(){
      $('.slick-active .t1, .slick-active .t2').removeClass('hidden');
      $('.slick-active .t1, .slick-active .t2').css("opacity", "1");      
    }, 1000);
  }
  function titleDel() {
   if($('.slick-active .t1')) {
     $('.slick-active .t1').addClass('hidden');
     $('.slick-active .t1').css("opacity", "0");      
   };
   if($('.slick-active .t2')) {
    $('.slick-active .t2').addClass('hidden');
    $('.slick-active .t2').css("opacity", "0");
   };
  }
  var $slickdots = $('.slick-dots');
  $('li:nth-child(2), li:nth-child(3), li:nth-child(4), li:nth-child(5), li:nth-child(6), li:nth-child(7)',$slickdots).addClass('first');
  $('li:nth-child(8), li:nth-child(9), li:nth-child(10), li:nth-child(11)',$slickdots).addClass('second');
  $('li:nth-child(12), li:nth-child(13), li:nth-child(14), li:nth-child(15), li:nth-child(16), li:nth-child(17)',$slickdots).addClass('third'); 
  $('li:nth-child(18), li:nth-child(19), li:nth-child(20)',$slickdots).addClass('fourth');
  $('li:nth-child(21), li:nth-child(22), li:nth-child(23)',$slickdots).addClass('fifth');    
  $('li:nth-child(2), li:nth-child(8), li:nth-child(12), li:nth-child(18), li:nth-child(21)',$slickdots).addClass('break');
  // Ajout de l'heure
  $('li.break',$slickdots).each(function(){
    $(this).append('<label>'+$('.slick-slide:nth-child('+($(this).index()+1)+')').attr('data-label')+'</label>');
  })

  $('li:nth-child(1)',$slickdots).addClass('profilhome');

  var nlinks = $("img[class^='lk']").length;
  $("img[class^='lk']").bind('load',function(){
    
    $newdiv = $('<div />');
    $(this).parent().append($newdiv)
    $newdiv.height($(this).height()).width($(this).width());
    $newdiv.css('background-image','url('+$(this).attr('src')+')').addClass($(this).attr('class'));

    $(this).detach();
    nlinks--;
    if(nlinks==0){
      loadlinks();
    }
  })
  function loadlinks(){
    $(".lk1").bind('click',function() {
      $('.mySlide').slickGoTo(1);
    });
    $(".lk2").bind('click',function() {
      $('.mySlide').slickGoTo(7);
    });
    $(".lk3").bind('click',function() {
      $('.mySlide').slickGoTo(11);
    });
    $(".lk4").bind('click',function() {
      $('.mySlide').slickGoTo(17);
    });
    $(".lk5").bind('click',function() {
      $('.mySlide').slickGoTo(20);
    });
  }


  $('.audioplayer .play').bind('click',function(){

    $('#audioplayer audio source').attr('src',$(this).attr('data-audiosrc'));
    $('#audioplayer audio')[0].pause();
    $('#audioplayer audio')[0].load();//suspends and restores all audio element
    $('#audioplayer audio')[0].play();

  })
  $('.audioplayer .pause').bind('click',function(){
    $('#audioplayer audio')[0].pause();  
  })
  $('.audioplayer .mute').bind('click',function(){
    $('#audioplayer audio')[0].muted = !$('#audioplayer audio')[0].muted;
  })
  

  var counterSpeed = 1500;
  var intervalstep = 40;
  $.fn.changeNumbers = function(end){
    console.log(end);
    var start = parseInt($(this).text(),10);
    var step = Math.round(intervalstep*(end-start)/counterSpeed);
    var $counter = $(this); 
    var timer = setInterval(function(){
      if(step*start < step*end){
        start+=step;
        $counter.text(('000000' + start).substr(-6)); 
      }else{
        start = end;
        $counter.text(('000000' + start).substr(-6));
        clearInterval(timer);
      }
    },intervalstep);

  }
  $('.counter').click(function(){
    $(this).changeNumbers(parseInt(100000*Math.random(),10));
  })


});