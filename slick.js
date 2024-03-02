$(document).ready(function () {
    $(".slick-slider").slick({
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        rows: 1,
        swipeToSlide: true,
        arrows: true,
        // mobileFirst: true,
        autoplay: true,
        infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 2024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

$(document).ready(function () {
    $(".slick-slider--about-me").slick({
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        rows: 1,
        swipeToSlide: false,
        arrows: false,
        // mobileFirst: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
