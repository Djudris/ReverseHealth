$(document).ready(function () {
    let owl4 = $("#single-product-carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        margin: 40,
        dots: true,
        autoplay: false,
        items: 1,
        loop: false,
        nav: false,
        center: false,
        dotsEach: 2,
    });
    $('.customNextBtnSingle').click(function () {
        owl4.trigger('next.owl.carousel');
    })
    $('.customPrevBtnSingle').click(function () {
        owl4.trigger('prev.owl.carousel');
    })
});

