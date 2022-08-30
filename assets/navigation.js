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
        $('body').removeClass('overflow-hidden')
        if (form) form.submit();
    }
}

customElements.define('localization-form', LocalizationForm);

$(document).ready(function () {
    let localizationCookie = document.cookie.match(new RegExp('(^| )' + 'localization' + '=([^;]+)'));
    let localizationModal = $('.js--country-modal');
    if (localizationCookie) {
        localizationModal.addClass('d-none')
        $('body').removeClass('overflow-hidden')
    } else {
        $('body').addClass('overflow-hidden')
    }
    $('.js--country-modal-close').click(function () {
        localizationModal.addClass('d-none')
        $('body').removeClass('overflow-hidden')
    })
});
