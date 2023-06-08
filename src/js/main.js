$(function () {
    $('.review__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="arrowleft"><img src="../img/icons/left-arrow.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="arrowright"><img src = "../img/icons/right-arrow.svg" alt = "arrow right"></button>',
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.bestsellers__catalog').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="bestsellers-arrow-left arrowleft"><img src="../img/icons/left-arrow.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="bestsellers-arrow-right arrowright"><img src = "../img/icons/right-arrow.svg" alt = "arrow right"></button>',
   /*     responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2
                }
            }
        ]*/
    });
})