var digikala = digikala || {};
digikala.sliders = digikala.sliders || {};
digikala.sliders.init = function () {
    try {
        $('.home_intro_slider').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            smartSpeed: 700,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ["<i class='fal fa-angle-right'></i>", "<i class='fal fa-angle-left'></i>"],
            rtl: true,
            nav: true,
            dots: true
        });

        $('.product_special_carousel').owlCarousel({
            loop: true,
            margin: 15,
            smartSpeed: 600,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            rtl: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        $('.home_products_carousel').owlCarousel({
            loop: true,
            margin: 15,
            smartSpeed: 600,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            rtl: true,
            nav: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                420: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

        $('.home_products_lahzeii').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            smartSpeed: 700,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            // navText: ["<i class='fal fa-angle-right'></i>", "<i class='fal fa-angle-left'></i>"],
            rtl: true,
            nav: false,
            dots: false,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar
        });

        function startProgressBar() {
            // apply keyframe animation
            $(".slide-progress").css({
                width: "100%",
                transition: "width 5000ms"
            });
        }

        function resetProgressBar() {
            $(".slide-progress").css({
                width: 0,
                transition: "width 0s"
            });
        }

    } catch (e) {
        console.log('In digikala.sliders.init(), Error:' + e)
    }
}

digikala.menuHover = digikala.menuHover || {};
digikala.menuHover.init = function () {
    try {
        const openMenuEl = document.querySelector('.header_menu_res'),
            overlayEl = document.querySelector('.bodyOverlay'),
            menuEl = document.querySelector('.menuFixed'),
            bodyEl = document.querySelector('body');

            openMenuEl.addEventListener('click', function() {
                bodyEl.classList.add('overflow-hidden')
                menuEl.classList.add('active')
                overlayEl.classList.add('active')
            })

            overlayEl.addEventListener('click', function() {
                bodyEl.classList.remove('overflow-hidden')
                menuEl.classList.remove('active')
                overlayEl.classList.remove('active')
            })


    } catch (e) {
        console.log('In digikala.menuHover.init(), Error:' + e)
    }
}

$(document).ready(function () {
    digikala.sliders.init();
});

window.addEventListener('DOMContentLoaded', function() {
    digikala.menuHover.init();
})
