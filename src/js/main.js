$(function () {
    $('.header__burger').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

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
        responsive: [
            {
                breakpoint: 1390,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1090,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });
})