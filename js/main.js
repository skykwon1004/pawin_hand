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


    AOS.init();


})