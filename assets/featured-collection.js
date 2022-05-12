$(document).ready(function () {
  if ($(window).width() < 768) {
    startCarouselReview();
  } else {
    $('#product-grid').addClass('off');
  }
});


$(window).resize(function () {
  if ($(window).width() < 768) {
    startCarouselReview();

  } else {
    stopCarouselReview();
  }
});

function startCarouselReview() {
  let owl3 = $("#product-grid").owlCarousel({
    navigation: false, // Show next and prev buttons
    dots: false,
    autoplay: false,
    loop: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        center: true,
      },
      768: {
        items: 2,
        margin: 10,
        center: true,
      },
      992: {
        items: 2,
        margin: 20,
        center: true,

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
let owl3 = $("#review-slider");

owl3.on('changed.owl.carousel', function (event) {
  let index = event.item.index;
  let count = event.item.count


  $('.customPrevBtnReview').removeClass("disabled-review");
  $('.customNextBtnReview').removeClass("disabled-review");
  if (index === 0) {
    $('.customPrevBtnReview').addClass("disabled-review");
  }

  if (index === count - 1) {
    $('.customNextBtnReview').addClass("disabled-review");
  }


});

function stopCarouselReview() {
  let owl2 = $('#product-grid');
  owl2.trigger('destroy.owl.carousel');
  owl2.addClass('off');
}
