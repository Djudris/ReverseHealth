
$(document).ready(function () {
    $(".mobile-dropdown-toggle, .mobile-nav-dropdown .dropdown-item").click(function () {
        $(".mobile-dropdown").toggleClass('mobile-full-dropdown')
    });
});
