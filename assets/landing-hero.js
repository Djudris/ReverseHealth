class LocalizationForm extends HTMLElement {
    constructor() {
        super();
        this.elements = {
            input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        };
        this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }
    onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        $('.js--country-modal').addClass('d-none')
        if (form) form.submit();
    }
}

customElements.define('localization-form', LocalizationForm);


$(document).ready(function () {
    let localizationCookie = document.cookie.match(new RegExp('(^| )' + 'localization' + '=([^;]+)'));
    if (localizationCookie) {
        $('.js--country-modal').addClass('d-none')
    }
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
        loop: false,
        nav: false,
        center: false,
        responsive: {
            0: {
                items: 2,
            },
            369: {
                items: 3,
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

    if (screen.width < 369) {
        if (index === count - 2) {
            $('.customNextBtnHero').addClass("disabled");
        }
    }
    if (screen.width >= 369 && screen.width < 600) {
        if (index === count - 3) {
            $('.customNextBtnHero').addClass("disabled");
        }
    }
    if (screen.width >= 600) {
        if (index === count - 4) {
            $('.customNextBtnHero').addClass("disabled");
        }
    }


});
