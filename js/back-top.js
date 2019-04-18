$(document).ready(function(){
    var offset = $('.page-header').height();
    $('.back-top').click(function (e) {
        e.preventDefault();
        $('body').stop().animate({scrollTop:0},500);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>offset){
            $('.back-top').attr('data-visible','true');
        }
        else{
            $('.back-top').attr('data-visible','false');
        }
    })


});