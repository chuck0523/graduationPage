$(function(){
    var W = $(window).width();
    var H = $(window).height();
    $('.cube').css({'transform':'translateZ(-'+H/2+'px)'});
    $('.cube,.cube div').css({width :W,height:H});
    $('.cube_top').css({top:-H/2});
    $('.cube_bottom').css({bottom:-H/2});
    $('.cube_front').css({'transform':'translateZ('+H/2+'px)'});
    $('.cube_back').css({'transform':'translateZ(-'+H/2+'px) rotateX(180deg)'});
    $('.nav').hide();
    $('.cube_front').children().slideDown(3000);
    function setCube(){
        wW = $(window).width();
        wH = $(window).height();
        $('.cube').css({'transform':'translateZ(-'+wH/2+'px)'});
        $('.cube,.cube div').css({width :wW,height:wH});
        $('.cube_top').css({top:-wH/2});
        $('.cube_bottom').css({bottom:-wH/2});
        $('.cube_front').css({'transform':'translateZ('+wH/2+'px)'});
        $('.cube_back').css({'transform':'translateZ(-'+wH/2+'px) rotateX(180deg)'});    
    }

    setCube();
      var degIndex = 0;
    setInterval(function(){
        degIndex++;
        var deg = $('.nav div a').eq(degIndex).data('deg');
        $('.cube').css({'transform':'translateZ(-'+wH/2+'px) rotateX('+deg+'deg)'});
        (degIndex==3)&&(
          setTimeout(function(){
            $('.nav').show();
          },2000)
        );
    },5000);
    $(document).on('click', '.nav a', function(event) {
        event.preventDefault();
        var deg = $(this).data('deg');
        $('.cube').css({'transform':'translateZ(-'+wH/2+'px) rotateX('+deg+'deg)'});
    });

    $(window).on('resize',function(){
        setCube();
    });

});