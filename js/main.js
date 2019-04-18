$(window).load(function () {

    $('.owl-carousel.item1').owlCarousel({
        nav: true,
        navText: false,
        loop: true,
        navSpeed: 1200,
        margin: 30,
        dots: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            480: {
                items: 2,
                nav: false,
                dots: true
            },
            992: {
                items: 3
            }

        }
    });
    $(".owl-carousel.item2").owlCarousel({
        loop: true,
        navSpeed: 1200,
        margin: 50,
        items: 2,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        autoplaySpeed: 1200,
        dotsSpeed: 900,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            }
            ,
            992: {
                items: 2
            }
        }
    });
    $('.owl-carousel.item3').owlCarousel({
        nav: true,
        navText: false,
        loop: true,
        navSpeed: 1200,
        margin: 30,
        dots: false,
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                center:true,
                nav: false,
                dots: true
            },
            480: {
                items: 2,
                nav: false,
                dots: true,
                center: true
            },
            992: {
                items: 4,
                center: true
            }

        }
    });

    var $container = $('.gallery-container>.item1');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.gallery-filter a').click(function (e) {
        e.preventDefault();
        $('.gallery-filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });


    $('a[data-rel^=lightcase]').lightcase({
        maxWidth: '90' + '%',
        errorMessage: '<p class="lightcase-error">Изоброжение не найдено...</p>',
        transition: 'scrollHorizontal',
        showSequenceInfo: true,
        showTitle: true,
        swipe: true,
        onClose: {
            qux: function () {
                $container.isotope('layout');
            }
        }
    });

    $('.toggle-nav a,.close-nav').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('nav-open');
    });


    $('.my-dropDown>a').click(function (e) {
        e.preventDefault();
    });
    $('.my-dropDown').hover(function () {
            $(this).find('.my-dropDown-Menu').stop().slideDown(300,function(){
                $(this).addClass('open');
            });
        },
        function () {
            $(this).find('.my-dropDown-Menu').stop().slideUp(300,function(){
                $(this).removeClass('open')
            });
        }
    );


});





