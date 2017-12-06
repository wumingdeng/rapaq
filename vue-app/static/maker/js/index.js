Wheight = $(window).height();
Wwidth = $(window).width();

//------------plugin-------------//
//swiper-top
var swiper = new Swiper('.header .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 5000
});
//swiper-funding
var swiperCart = new Swiper('.funding-focus', {
    nextButton: '.focusNext',
    prevButton: '.focusPrev',
    centeredSlides: true,
    autoplay: 5000
});
//swiper-project
var swiperCart = new Swiper('.project-list', {
    nextButton: '.projectNext',
    prevButton: '.projectPrev',
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        414: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});
//swiper-life
// var swiperCart = new Swiper('.life-routine', {
//  nextButton: '.lifeNext',
//  prevButton: '.lifePrev',
//     slidesPerView: 3,
//     spaceBetween: 20,
//     breakpoints: {
//         414: {
//             slidesPerView: 1,
//             spaceBetweenSlides: 0
//         }
//     }
// });
