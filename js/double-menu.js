$(document).ready(function () {
    function doubleMenu() {
            if (($('.double').length)>=1) {
                return false
            }
            else {
                var $target, offset, scrollHeight;

                $target = $('.page-nav');
                scrollHeight = $(window).scrollTop();
                offset = $('.page-header').height();
                $('.page').prepend($target.clone().addClass('double'));

                $(window).scroll(function () {
                    scrollHeight = $(window).scrollTop();
                    if (scrollHeight >= offset) {
                        $('.double').css({top: 0});
                    }
                    else {
                        $('.double').css({top: -500});
                    }
                });
            }

    };
    doubleMenu();
    $(window).resize(function () {
        doubleMenu();
    });

});