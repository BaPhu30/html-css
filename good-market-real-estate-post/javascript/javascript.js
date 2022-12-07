$('.main__section--slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
});

$('.main__section--slider-mobile').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 410,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '120px',
                slidesToShow: 1
            }
        }
    ]
});

