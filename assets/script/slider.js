$(function () {
    $(".slider")
        .slick({
            autoplay: false,
            arrows: false,
            dots: true,
            dotsClass: "slider-dots",
            fade: false,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            centerPadding: 'calc(100vw/390*25)',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: 'calc(100vw/1440*310)',
                    },
                },
            ],
        })

});
