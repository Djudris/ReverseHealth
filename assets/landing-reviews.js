$(document).ready(function () {
    if ($(window).width() < 992) {
        startCarouselReview();
    } else {
        $('#review-slider').addClass('off');
    }
});


$(window).resize(function () {
    if ($(window).width() < 992) {
        startCarouselReview();

    } else {
        stopCarouselReview();
    }
});

function startCarouselReview() {
    let owl3 = $("#review-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        dots: false,
        autoplay: false,
        loop: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                center:false,
            },
            768: {
                items: 2,
                margin: 10,
                center:false,
            },
            992: {
                items: 2,
                margin: 10,
                center: false,

            },
        }
    });
    $('.customNextBtnReview').click(function () {
        owl3.trigger('next.owl.carousel');
    })
    $('.customPrevBtnReview').click(function () {
        owl3.trigger('prev.owl.carousel');
    })
}

function stopCarouselReview() {
    let owl2 = $('#review-slider');
    owl2.trigger('destroy.owl.carousel');
    owl2.addClass('off');
}
