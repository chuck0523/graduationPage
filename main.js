$(function(){

    var W = $(window).width();
    var H = $(window).height();
    $('.cube').css({
        '-webkit-transform':'translateZ(-'+H/2+'px)',
        'transform':'translateZ(-'+H/2+'px)'
    });
    $('.cube,.cube div').css({width :W,height:H});
    $('.cube_top').css({top:-H/2});
    $('.cube_bottom').css({bottom:-H/2});
    $('.cube_front').css({
        '-webkit-transform':'translateZ('+H/2+'px)',
        'transform':'translateZ('+H/2+'px)'
    });
    $('.cube_back').css({
        '-webkit-transform':'translateZ(-'+H/2+'px) rotateX(180deg)',
        'transform':'translateZ(-'+H/2+'px) rotateX(180deg)'
    });
    $('.cube_front').children().slideDown(3000);
    function setCube(){
        wW = $(window).width();
        wH = $(window).height();
        $('.cube').css({
            '-webkit-transform':'translateZ(-'+wH/2+'px)',
            'transform':'translateZ(-'+wH/2+'px)'
        });
        $('.cube,.cube div').css({width :wW,height:wH});
        $('.cube_top').css({top:-wH/2});
        $('.cube_bottom').css({bottom:-wH/2});
        $('.cube_front').css({
            '-webkit-transform':'translateZ('+wH/2+'px)',
            'transform':'translateZ('+wH/2+'px)'
        });
        $('.cube_back').css({
            '-webkit-transform':'translateZ(-'+wH/2+'px) rotateX(180deg)',
            'transform':'translateZ(-'+wH/2+'px) rotateX(180deg)'
        });
    }

    setCube();

    $(document).on('click', '.nav a', function(event) {
        event.preventDefault();
        var deg = $(this).data('deg');
        $('.cube').css({'transform':'translateZ(-'+wH/2+'px) rotateX('+deg+'deg)'});
    });

    $(window).on('resize',function(){
        setCube();
    });

});/**
 * Created by chuck on 11/5/15.
 */
