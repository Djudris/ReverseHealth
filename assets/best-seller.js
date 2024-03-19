$(document).ready(function () {
   let owl = $("#best_seller_carousel").owlCarousel({
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
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    })

    owl.on('changed.owl.carousel', function (event) {
        let items_per_page = event.page.size; // Get the number of items per page
        let total_items = event.item.count;   // Total number of items
        let current_position = event.item.index; // Current position

        // Enable buttons by default
        $('.customPrevBtn').removeClass("disabled");
        $('.customNextBtn').removeClass("disabled");

        // Disable prev button at the start
        if (current_position === 0) {
            $('.customPrevBtn').addClass("disabled");
        }

        // Disable next button at the end
        // Calculate the index of the first item of the last page
        let last_page_first_item_index = total_items - items_per_page;
        if (current_position >= last_page_first_item_index || total_items <= items_per_page) {
            $('.customNextBtn').addClass("disabled");
        }
    });
});

