$(document).ready(function () {
    if ($(window).width() < 992) {
        startCarousel();
    } else {
        $('#hero-slider').addClass('off');
    }
});


$(window).resize(function () {
    if ($(window).width() < 992) {
        startCarousel();

    } else {
        stopCarousel();
    }
});

function startCarousel() {
    $("#hero-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        margin: 10,
        dots: false,
        autoplay: false,
        items: 3.7,
        loop: true,
        nav: false,
        center: false,
    });
}

function stopCarousel() {
    let owl2 = $('#hero-slider');
    owl2.trigger('destroy.owl.carousel');
    owl2.addClass('off');
}
