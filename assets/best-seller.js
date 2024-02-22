$(document).ready(function () {
    $("#best_seller_carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        dots: false,
        autoplay: false,
        loop: false,
        nav: false,
        center: false,
        responsive: {
            0: {
                items: 1,
                dotsEach: 1,
                margin: 30,
                stagePadding: 30,
            },
            450: {
                margin: 30,
                items: 1,
            },
            767: {
                margin: 30,
                items: 2,
            },
            1400: {
                items: 3,
                margin: 25,
            }
        },

    });
    // $('.customNextBtn').click(function () {
    //     owl.trigger('next.owl.carousel');
    // })
    // $('.customPrevBtn').click(function () {
    //     owl.trigger('prev.owl.carousel');
    // })
    //
    // owl.on('changed.owl.carousel', function (event) {
    //     let index = event.item.index;
    //     let count = event.item.count
    //
    //
    //     $('.customPrevBtn').removeClass("disabled");
    //     $('.customNextBtn').removeClass("disabled");
    //     if (index === 0) {
    //         $('.customPrevBtn').addClass("disabled");
    //     }
    //
    //     if (screen.width >= 992) {
    //         if (index === count - 3) {
    //             $('.customNextBtn').addClass("disabled");
    //         }
    //     }
    //     if (screen.width >= 768 && screen.width < 992) {
    //         if (index === count - 2) {
    //             $('.customNextBtn').addClass("disabled");
    //         }
    //     }
    //     if (screen.width < 768) {
    //         if (index === count - 1) {
    //             $('.customNextBtn').addClass("disabled");
    //         }
    //     }
    // });
});

