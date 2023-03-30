// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 2,
//     nav: true,
//     items: 8,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 6,
//         }
//     }
// })
$(function () {
    $('.our-service-active').owlCarousel({
        margin: 8,
        nav: false,
        items: 4,
        navText: ["<i class='fa-solid fa-chevron-left our-solution-1 our-solution-left'></i>", "<i class='fa-solid fa-chevron-right our-solution-1 our-solution-right'></i>"],
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
                loop: true,
            },
        },
    })
});

$(function () {
    $('#our-team-active').owlCarousel({
        margin: 30,
        nav: false,
        items: 3,
        navText: ["<i class='fa-solid fa-chevron-left our-team-1 our-team-left'></i>", "<i class='fa-solid fa-chevron-right our-team-1 our-team-right'></i>"],
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
            },
        },
    })
});

$(function () {
    $('#clint-slider-active').owlCarousel({
        margin: 30,
        nav: false,
        items: 8,
        responsive: {
            0: {
                items: 2,
                nav: false,
            },
            768: {
                items: 5,
                nav: false,
            },
            1000: {
                items: 6,
                nav: false,
                loop: true,
            },
        },
    })
});