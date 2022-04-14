$(document).ready(function () {
   let owl = $("#best_seller_carousel").owlCarousel({
        navigation: false, // Show next and prev buttons
        margin: 40,
        dots: false,
        autoplay: false,
        items: 4,
        loop: true,
        nav: false,
        center: false,
       responsive: {
           0: {
               items: 1.2,
               dotsEach:3,
                dots:true,
           },
           768: {
               items: 2,
               dots:true,
           },
           992: {
               items: 3,
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
});

