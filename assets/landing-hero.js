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
        dots: true,
        autoplay: false,
        loop: false,
        nav: false,
        center: false,
        responsive: {
            0: {
                items: 2,
            },
            369: {
                items:3,
            },
            600: {
                items: 4,

            },
        }
    });
}

let owl2 = $('#hero-slider');

function stopCarousel() {

    owl2.trigger('destroy.owl.carousel');
    owl2.addClass('off');
}

$('.customNextBtnHero').click(function () {
    owl2.trigger('next.owl.carousel');
})
$('.customPrevBtnHero').click(function () {
    owl2.trigger('prev.owl.carousel');
})

owl2.on('changed.owl.carousel', function (event) {
    let index = event.item.index;
    let count = event.item.count


    $('.customPrevBtnHero').removeClass("disabled");
    $('.customNextBtnHero').removeClass("disabled");
    if (index === 0) {
        $('.customPrevBtnHero').addClass("disabled");
    }

    if (index === count - 4) {
        $('.customNextBtnHero').addClass("disabled");
    }

});
