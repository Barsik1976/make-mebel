    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: false,
        autoHeight: true,
        freeMode: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 40,
        loop: true,
        autoHeight: true,
    loopedSlides: 3, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});


/*

$(document).ready(function(){

$.fn.equivalent = function (){

    var $blocks = $(this),
            maxH    = $blocks.eq(0).height();
$blocks.each(function(){
10
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
});

 $blocks.height(maxH);
    }



    $('.nav').equivalent();

});

*/
