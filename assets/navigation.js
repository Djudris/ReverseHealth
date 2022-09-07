$(document).ready(function () {
    let currentUrl = window.location.origin;
    let countrySelected = localStorage.getItem("countrySelected");
    let pageLocation = window.location.pathname === '/';
    let localizationModal = $('.js--country-modal');
    function closeModal() {
        localizationModal.addClass('d-none')
        $('body').removeClass('overflow-hidden')
    }

    if (new URLSearchParams(window.location.search).get("redirect") !== null && pageLocation) {
        localStorage.setItem("countrySelected", "true");
        countrySelected = true;
    }
    if (!countrySelected && pageLocation) {
        localizationModal.removeClass('d-none')
        $('body').addClass('overflow-hidden')
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    $('.js--country-modal-close').click(function () {
        closeModal();
    })
    $('.modal-country-selector').click(function () {
        let redirectURL = $(this).data('country');
        if (redirectURL.split('?')[0].replace(/\/$/,'') === currentUrl) {
            localStorage.setItem("countrySelected", "true");
            closeModal();
        } else {
            window.location.href = redirectURL;
        }
    })
});
