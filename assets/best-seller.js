$(document).ready(function () {
    let owl = $("#best_seller_carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        dots: true,
        autoplay: false,
        loop: false,
        nav: false,
        center: false,
        responsive: {
            0: {
                items: 1,
                dotsEach: 1,
                dots: true,
                margin: 20,

            },
            768: {
                items: 2,
                dots: true,
                margin: 30,

            },
            992: {
                items: 3,
                margin: 30,
            }
        },

    });
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    })

    owl.on('changed.owl.carousel', function (event) {
        let index = event.item.index;
        let count = event.item.count


        $('.customPrevBtn').removeClass("disabled");
        $('.customNextBtn').removeClass("disabled");
        if (index === 0) {
            $('.customPrevBtn').addClass("disabled");
        }

        if (screen.width >= 992) {
            if (index === count - 3) {
                $('.customNextBtn').addClass("disabled");
            }
        }
        if (screen.width >= 768 && screen.width < 992) {
            if (index === count - 2) {
                $('.customNextBtn').addClass("disabled");
            }
        }
        if (screen.width < 768) {
            if (index === count - 1) {
                $('.customNextBtn').addClass("disabled");
            }
        }
    });
});

