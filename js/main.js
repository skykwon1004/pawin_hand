$(function () {
    // header
    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_wrap').addClass('on');
        } else {
            $('.header_wrap').removeClass('on');
        }
    });

    // main_visual
    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    // main_produt_slide
    $('.main_product_slide').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    
    $('.main_product .arrows .left').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .right').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.main_product_slide').on('init afterChange', function (e, s, c) {
        var current = $('.main_product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_product .slide_dots button').removeClass('on');
        $('.main_product .slide_dots button').eq(c ? c : 0).addClass('on');
    });

    $('.main_product .slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.main_product_slide').slick('slickGoTo', idx);
    });

    $('.main_product .slide_dots button').on('click', function () {
        $('.main_product .slide_dots button').removeClass('on');
        $(this).addClass('on');
    });



    
    // main_review
    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.right_slide').on('init afterChange', function (e, s, c) {
        var current = $('.right_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_review .slide_dots button').removeClass('on');
        $('.main_review .slide_dots button').eq(c ? c : 0).addClass('on');
    });

    $('.main_review .slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.right_slide').slick('slickGoTo', idx);
    });

    $('.main_review .slide_dots button').on('click', function () {
        $('.main_review .slide_dots button').removeClass('on');
        $(this).addClass('on');
    });




    // to top button
    $(window).on('scroll', function () {
        // 스크롤양을 구함
        var sct = $(window).scrollTop();

        if (sct > 1000) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 600)
    });

    //mopen
    $('.mopen').on('click', function () {
        $('.header').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header').hasClass('on')) {
            // header에 on이 붙었을때만 이벤트 정지하라
            e.preventDefault();
        };
        // return false;     a 이벤트 막는법 두번째
        console.log(e, e.currentTarget, $(this));
        $('.header .gnb>ul>li .smenu').removeClass('on');
        $(this).next().addClass('on');
        // 내가 클릭한 this 의 next에(자식) on을 붙여라
    });


    // 모바일 메뉴열었을때 뒤에 스크롤 안되게하는
    $('.header').on('scroll wheel touchmove', function (e) {
        if ($('.header').hasClass('on')) {
            // header에 on이 붙었을때만 이벤트 정지하라
            e.preventDefault();
        };
    });

    AOS.init();


})