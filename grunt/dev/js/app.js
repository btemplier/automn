/*var socket = io.connect();
console.log('check 1', socket.socket.connected);
socket.on('connect', function() {
  console.log('check 2', socket.socket.connected);
});
*/
if (typeof io != 'undefined'){
  var socket = io('http://localhost:1456');
  socket.emit('tabletevent', { 'startprofil': 'true' });
  socket.on('news', function (data) {
    console.log(data);
    //socket.emit('my other event', { my: 'data' });
    //console.log(window.location.search);
  });
}
/*
  $(document).ready(function(){
    $('#mybutton').bind('click',function(){
      socket.emit('buttonclicked', { button: 'lenomdubouton' });
    });
  })
*/
$(document).ready(function(){
  $('.mySlide').slick({
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    onAfterChange : function(index){
     titleOn();
     //console.log($('.slick-active').attr('data-video'));
     if (typeof io != 'undefined'){
      socket.emit('tabletevent', { 'slick.onAfterChange': $('.slick-active').attr('data-video') });
      }
    },
    onBeforeChange : function(index){
     titleDel();
     if (typeof io != 'undefined'){
        socket.emit('tabletevent', { 'slick.onBeforeChange': index.currentSlide });
      }
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
  $(".home_profil").click(function() {
    $(".popin, .opa").css({'opacity':'1', 'pointer-events': 'initial'});
  });
  $(".opa, button.non, .close").click(function() {
    $(".popin, .opa").css({'opacity':'0', 'pointer-events': 'none'});
  });
  var contentFirst = "<div class='contentPlus'><img src='images/profil_1/debut_journee.png' alt=''/></div>";
  $('.slick-dots li:first-child').append(contentFirst);
  $('.slick-dots li:nth-child(2)').click(function() {
    $(".contentPlus").show();
  });
  $('.slick-dots li').click(function() {
    $(".contentPlus").hide();
  });
  $('.slick-dots li:nth-child(2)').click(function() {
    $(".contentPlus").show();
  });
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

  $('#audioplayer audio')[0].volume = 0.64;
  $('.audioplayer .playpause').on('click',function(){
    if($(this).hasClass('play')){
      
      $('.audioplayer .pause').attr('src','images/audioplayer/play.png');
      $('.audioplayer .pause').removeClass('pause').addClass('play');

      $(this).attr('src','images/audioplayer/pause.png');
      $(this).add($('.audioplayer .pause')).removeClass('play').addClass('pause');


      $('#audioplayer audio source').attr('src',$(this).attr('data-audiosrc'));
      $('#audioplayer audio')[0].pause();
      $('#audioplayer audio')[0].load();//suspends and restores all audio element
      $('#audioplayer audio')[0].play();
    }else{
      $('.audioplayer .playpause').attr('src','images/audioplayer/play.png');
      $('.audioplayer .playpause').removeClass('pause').addClass('play');
      $('#audioplayer audio')[0].pause();  
    }
  })
  /*
  $('.audioplayer .pause').on('click',function(){
  })
*/
  $('.audioplayer .mute').on('click',function(){
    $('#audioplayer audio')[0].muted = !$('#audioplayer audio')[0].muted;
  })
  $('.audioplayer .volup').on('click',function(){
    $('#audioplayer audio')[0].volume = Math.min(1.0 , $('#audioplayer audio')[0].volume + 1/6);
    $('.audioplayer .volledon').css('width',($('#audioplayer audio')[0].volume * 100)+"%");
  })
  $('.audioplayer .voldown').on('click',function(){
    $('#audioplayer audio')[0].volume = Math.max(0.0 , $('#audioplayer audio')[0].volume - 1/6);
    $('.audioplayer .volledon').css('width',($('#audioplayer audio')[0].volume * 100)+"%");
  })
  



  // COUNTER WIDGET
  var counterSpeed = 1500;
  var intervalstep = 50;
  $.fn.changeNumbers = function(delta){
    var end = parseInt($(this).attr('value'),10)+parseInt(delta,10);
    var start = parseInt($(this).attr('value'),10);
    $(this).attr('value',end);
    var step = Math.round(intervalstep*(end-start)/counterSpeed);
    var $counter = $(this); 
    var timer = setInterval(function(){
      if(step*start < step*end){
        start+=step;
        $counter.text(('000000' + start).substr(-$counter.attr('length'))); 
      }else{
        start = end;
        $counter.text(('000000' + start).substr(-$counter.attr('length')));
        clearInterval(timer);
      }
    },intervalstep);

  }
  $('.counter').each(function(){
    $(this).attr('value',$(this).text());
    $(this).attr('length',$(this).text().length);
  });
  $('.counterbutton#boutonlampes').bind('click touchend',function(){
    if($(this).hasClass('toggled')){
      $(this).removeClass('toggled');
      // INTERACTION SHOWCONTROL LAMPES
      console.log('raise back lamp power (x2)');
      if (typeof io != 'undefined'){
        socket.emit('tabletevent', { 'boutonlampes': 'off' });
      }
      // endof interaction
      $('#puissanceparc, #puissanceparc2').changeNumbers($(this).attr('powervalue'));
      $('#lampespuissance').changeNumbers($(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers(-$(this).attr('costvalue'));
      $('#lampeseconomies').changeNumbers($(this).attr('costvalue'));
    }else{
      $(this).addClass('toggled');
      // INTERACTION SHOWCONTROL LAMPES
      console.log('reduce lamp power x2');
      if (typeof io != 'undefined'){
        socket.emit('tabletevent', { 'boutonlampes': 'on' });
      }
      // endof interaction
      $('#puissanceparc, #puissanceparc2').changeNumbers(-$(this).attr('powervalue'));
      $('#lampespuissance').changeNumbers(-$(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers($(this).attr('costvalue'));
      $('#lampeseconomies').changeNumbers(-$(this).attr('costvalue'));
    }
  });
  $('.counterbutton#boutonballons').bind('click touchend',function(){
    if($(this).hasClass('toggled')){
      $(this).removeClass('toggled');
      $('#puissanceparc, #puissanceparc2').changeNumbers($(this).attr('powervalue'));
      $('#ballonspuissance').changeNumbers($(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers(-$(this).attr('costvalue'));
      $('#ballonseconomies').changeNumbers($(this).attr('costvalue'));
    }else{
      $(this).addClass('toggled');
      $('#puissanceparc, #puissanceparc2').changeNumbers(-$(this).attr('powervalue'));
      $('#ballonspuissance').changeNumbers(-$(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers($(this).attr('costvalue'));
      $('#ballonseconomies').changeNumbers(-$(this).attr('costvalue'));
    }
  });
  $('.counterbutton#boutontelegestion').bind('click touchend',function(){
    if($(this).hasClass('toggled')){
      $(this).removeClass('toggled');
      $('#puissanceparc, #puissanceparc2').changeNumbers($(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers(-$(this).attr('costvalue'));
    }else{
      $(this).addClass('toggled');
      $('#puissanceparc, #puissanceparc2').changeNumbers(-$(this).attr('powervalue'));
      $('#totaleconomies, #totaleconomies2').changeNumbers($(this).attr('costvalue'));
    }
  });



  // P1_E2_E4 alert buttons
  $('.alertlogo').bind('click touchend',function(){
      // INTERACTION VIDEOPROJECTION
      console.log('show VP alert button #'+$(this).index());
      if (typeof io != 'undefined'){
        socket.emit('tabletevent', { 'P1E2E4.alert': $(this).index() });
      }
      // endof interaction
  });



  // P1_E3_E3 diaporama tablette
  $('.slick-slide[index=13] .squarebuttons .button').bind('click touchend',function(){
    $('.slick-slide[index=13] .diapos img:first').animate({'margin-left':-($(this).index()*590)+'px'}, 500);
    $('.slick-slide[index=13] .diapos img.current').removeClass('current');
    $('.slick-slide[index=13] .diapos img').eq($(this).index()).addClass('current');
  });
  $('.slick-slide[index=13] .diapoprev').bind('click touchend',function(){
    $current = $('.slick-slide[index=13] .diapos img.current');
    if($current.prev().length > 0){
      $current.removeClass('current').prev().addClass('current');
      $('.slick-slide[index=13] .diapos img:first').animate({'margin-left':-($current.prev().index()*590)+'px'}, 500);
    }
  });
  $('.slick-slide[index=13] .diaponext').bind('click touchend',function(){
    $current = $('.slick-slide[index=13] .diapos img.current');
    if($current.next().length > 0){
      $current.removeClass('current').next().addClass('current');
      $('.slick-slide[index=13] .diapos img:first').animate({'margin-left':-($current.next().index()*590)+'px'}, 500);
    }
  });

});