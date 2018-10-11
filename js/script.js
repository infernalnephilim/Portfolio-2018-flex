$(function () {
    $('a[href^="#"]').click(function () {
        const the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');

        toggleNavbar();
        return false;
    });
    $(".main-header__arrow").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 'slow');
    });

});

$(document).ready(function () {

    $(".navbar-nav .nav-item .nav-link").on("click", function () {
        $(".navbar-nav .nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".navbar").addClass("nav-inactive");
    $(".nav-icon__line").addClass("nav-icon-inactive");
    $(".other-skills").addClass("hide-skills");

    $(".nav-icon").on("click", () => {
        toggleNavbar();
    });


    const images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
    const imagesCover = [].slice.call(document.querySelectorAll('.js-parallax-bg-cover'));

    function doParallax() {
        let el, elOffset, elHeight,
            offset = getViewportScroll(),
            vHeight = getViewportHeight();

        for (let i in images) {
            el = images[i];
            elOffset = el.offsetTop;
            elHeight = el.offsetHeight;

            if ((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) {
                continue;
            }

            el.style.backgroundPosition = '50% ' + Math.round((elOffset - offset) * 2 / 8) + 'px';
        }
        for (let i in imagesCover) {
            el = imagesCover[i];
            elOffset = el.offsetTop;
            elHeight = el.offsetHeight;

            if ((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) {
                continue;
            }

            el.style.backgroundPosition = '50% ' + Math.round((elOffset - offset) * 9 / 8 - 50) + 'px';
        }
    }

    Gator(window).on('scroll', doParallax);

});

function toggleNavbar() {
    $(".navbar").toggleClass("opened");
    $(".nav-icon__line").toggleClass("nav-icon-inactive", "nav-icon-active");
    $(".nav-icon__line").toggleClass("nav-icon-active-2");
    $(".nav-icon__line__left").toggleClass("nav-icon-active");
    // $(".nav-icon__line__left").addClass("up-bar-change");
    $(".nav-icon__line__right").toggleClass("nav-icon-active");
}

function getViewportHeight() {
    const a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

function getViewportScroll() {
    if (typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if (typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    let doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}

