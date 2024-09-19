'use strict';

$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });
});

function parallaxScroll() {
    const scrolled = $(window).scrollTop();
    $('#team-image').css('top', (0 - (scrolled * .20)) + 'px');
    $('.img-1').css('top', (0 - (scrolled * .35)) + 'px');
    $('.img-2').css('top', (0 - (scrolled * .05)) + 'px');
}
$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});