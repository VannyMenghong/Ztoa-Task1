$('.owl-carousel').owlCarousel({
    loop: true,
    margin: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left go-icon left'  style=''></span>", "<span class='go-icon fa fa-angle-right' style=''></span>"],
    dots: false,
    autoplay: true,
    loop: true,
    interval: 100,

    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        770: {
            items: 4
        },
        1000: {
            items: 6,

        }
    }
})

//tooltip function
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

