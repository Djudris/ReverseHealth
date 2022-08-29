class LocalizationForm extends HTMLElement {
    constructor() {
        super();
        this.elements = {
            input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        };
        this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

        this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }


    onContainerKeyUp(event) {
        if (event.code.toUpperCase() !== 'ESCAPE') return;
        this.elements.button.focus();
    }

    onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
    }

    openSelector() {
        this.elements.button.focus();
        this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
        const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
    }
}

customElements.define('localization-form', LocalizationForm);


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
