$(window).scroll(function () {
    120 < $(window).scrollTop() ?
        $(".navbar-fixed-wrapper").addClass("shadow-navbar-fixed-wrapper") :
        $(".navbar-fixed-wrapper").removeClass("shadow-navbar-fixed-wrapper");
});
