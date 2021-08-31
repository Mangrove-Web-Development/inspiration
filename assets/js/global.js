// —————————————————————————————————————————————————————
// Check browser & and inform user if it is out of date
// —————————————————————————————————————————————————————
var $buoop = {
    required: {
        e: -6,
        f: -6,
        o: -6,
        s: -4,
        c: -6
    },
    insecure: true,
    api: 2019.11
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}


// —————————————————————————————————————————————————————
// is touch device
// —————————————————————————————————————————————————————
function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

// —————————————————————————————————————————————————————
// is keyboard user
// —————————————————————————————————————————————————————
(function () {
    'use strict';

    function keyboardFocus(e) {
        if (e.keyCode !== 9) {
            return;
        }

        switch (e.target.nodeName.toLowerCase()) {
            case 'input':
            case 'select':
            case 'textarea':
                break;
            default:
                document.documentElement.classList.add('keyboard-focus');
                document.removeEventListener('keydown', keyboardFocus, false);
        }
    }

    document.addEventListener('keydown', keyboardFocus, false);
})();

// —————————————————————————————————————————————————————
// home page testimonial slider
// —————————————————————————————————————————————————————
function testimSlider() {
    $('.home-testimonials__slider').slick({
        arrowsPlacement: 'beforeSlides',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
}

// —————————————————————————————————————————————————————
// scroll events 
// —————————————————————————————————————————————————————
function navScrolly() {
    var mainNav = document.querySelector('.main-header__nav');
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            if (window.scrollY >= (mainNav.offsetHeight + 300)) {
                mainNav.classList.add('main-header__nav--zero');
                mainNav.classList.remove('main-header__nav--sticky');
            }
        } else {
            if (window.scrollY >= (mainNav.offsetHeight + 300)) {
                // show the sticky nav on scroll back up
                mainNav.classList.remove('main-header__nav--zero');
                mainNav.classList.add('main-header__nav--sticky');
            } else {
                // on the way back up to the top header nav
                mainNav.classList.add('main-header__nav--zero');
                setTimeout(mainNav.classList.remove('main-header__nav--sticky'), 600);
                setTimeout(mainNav.classList.remove('main-header__nav--zero'), 650);
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
}


// ——————————————————————————————————————————————————
// hamburger nav
// ——————————————————————————————————————————————————
function toggleNav() {
    var menu = document.querySelector('.main-header__nav >div');

    function toggleNav() {
        if (menu.classList.contains('is-active')) {
            $('#navToggle').attr('aria-expanded', 'false');
            menu.classList.remove('is-active');
        } else {
            menu.classList.add('is-active');
            $('#navToggle').attr('aria-expanded', 'true');
        }

        // set focus on first link within menu
        $('.main-header__nav >div >ul >li:first-child > a').focus();
    }
}


// Remember to minimize this file before putting into production site

document.addEventListener("DOMContentLoaded", function () {
    navScrolly();
    testimSlider();

    $('#navToggle').click(function () {
        toggleNav();
    });

    // —————————————————————————————————————————————————————
    // home page image animation
    // —————————————————————————————————————————————————————
    // in index file


}); // end if DOMContentLoaded




if (window.inEditorMode) {
    // do not load barba
} else {
    document.addEventListener("DOMContentLoaded", function () {
        // ——————————————————————————————————————————————————
        // Barba
        // —————————————————————————————————————————————————— 
        barba.init({
            transitions: [{
                name: 'default',
                leave(data) {
                    // automatically close nav
                    // var menu = document.querySelector('#mainNav');
                    // $('#navToggle').attr('aria-expanded', 'false');
                    // menu.classList.remove('is-active');
                    // gsap.to(menu, {
                    //     right: "-590px",
                    //     display: "none",
                    //     duration: .35,
                    //     ease: "circ.out",
                    // });

                    return gsap.to(data.current.container, {
                        ease: Power4.easeInOut,
                        opacity: 0,
                        display: "none",
                        duration: .5,
                    });
                },
                enter(data) {
                    // scroll to the top of the page
                    $("html, body").animate({ scrollTop: 0 }, "slow");

                    return gsap.fromTo(
                        data.next.container,
                        {
                            ease: Power4.easeInOut,
                            opacity: 0,
                        },
                        {
                            delay: 1,
                            opacity: 1,
                            duration: .5,
                        }
                    );
                },
            }]
        });

        barba.hooks.once((data) => {
            // help fathom get the correct URL on first page
            // fathom.trackPageview({
            //     url: data.next.url.href,
            // });
        }); // end barba.hooks.once

        barba.hooks.after((data) => {   
            testimSlider();
            navScrolly();
        
            $('#navToggle').click(function () {
                toggleNav();
            });

            // —————————————————————————————————————————
            // U P D A T E   N A V - A C T I V E
            // —————————————————————————————————————————
            let nextItem = data.next.url.path;
            let menu = document.querySelectorAll(".main-header__nav__link");
            let currentPermalink = window.location.pathname;
            let currentPermalinkSplit = currentPermalink.split("/");
            let currentParentPage = "/" + currentPermalinkSplit[1] + "/";

            // for each menu item, run the active class update function
            menu.forEach((link) => {
                // remove all active classes
                link.parentElement.classList.remove("active");
                // add active class to the link
                if (link.pathname == nextItem) {
                    link.parentElement.classList.add("active");
                } else if (link.attributes.href.nodeValue == currentParentPage) {
                    link.parentElement.classList.add("active");
                }
            });

            // help fathom get the correct URL on subsequent pages
            // fathom.trackPageview({
            //     url: data.next.url.href,
            // });
        });
    }); // end content loaded
}