$(document).ready(function () {
    let owl = $("#best_seller_carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        margin: 30,
        dots: true,
        autoplay: false,
        items: 4,
        loop: false,
        nav: false,
        center: false,
        responsive: {
            0: {
                loop: true,
                items: 1.2,
                dotsEach: 3,
                dots: true,
                margin: 20,
            },
            768: {
                items: 2,
                dots: true,
            },
            992: {
                loop: false,
                items: 3,
                center: true,
                dotsEach: 2,
            },
            1200: {

                items: 3,
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
        console.log(event.item)
        let index = event.item.index;
        let count = event.item.count
        $('.customPrevBtn').removeClass("disabled");
        $('.customNextBtn').removeClass("disabled");
        if (index === 0) {
            $('.customPrevBtn').addClass("disabled");
        }
        if (index === count - 3) {
            $('.customNextBtn').addClass("disabled");
        }

    });
});

