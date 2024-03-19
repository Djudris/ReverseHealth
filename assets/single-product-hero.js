$(document).ready(function () {
    let owl4 = $("#single-product-carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        margin: 0,
        dots: true,
        autoplay: false,
        items: 1,
        loop: false,
        nav: false,
        center: false,
        dotsEach: 1,
    });
    $('.add-to-cart-card').click(function () {
        $('.add-to-cart-card').removeClass('selected-opcija');
        $(this).addClass('selected-opcija');
    })
    $('.customNextBtnSingle').click(function () {
        owl4.trigger('next.owl.carousel');
    })
    $('.customPrevBtnSingle').click(function () {
        owl4.trigger('prev.owl.carousel');
    })

    owl4.on('changed.owl.carousel', function (event) {

        let index = event.item.index;
        let count = event.item.count
        $('.customPrevBtnSingle').removeClass("disabled");
        $('.customNextBtnSingle').removeClass("disabled");
        if (index === 0) {
            $('.customPrevBtnSingle').addClass("disabled");
        }
        if (index === count - 1) {
            $('.customNextBtnSingle').addClass("disabled");
        }

    });
});

