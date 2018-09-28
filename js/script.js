$(function () {
    $("#s1-text").load("about-me/about-me-section.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#s2-text").load("../skills/skills.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    // $("#s3-text").load("edukacja.html", function (response, status, xhr) {
    //     if (status == "error") {
    //         var msg = "Wystąpił błąd podczas ładowania strony: ";
    //         $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //     }
    // });
    $("#s4-text").load("portfolio/portfolio.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#s5-text").load("contact/contact.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    // $("footer").load("footer.html", function (response, status, xhr) {
    //     if (status == "error") {
    //         var msg = "Wystąpił błąd podczas ładowania strony: ";
    //         $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //     }
    // });
    //$(".nav-item:nth-child(1)").addClass("active");

    $('a[href^="#"]').click(function () {
        console.log("Smooth");
        const the_id = $(this).attr("href");
        console.log(the_id);

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');

        toggleNavbar();

        return false;
    });
});

$(document).ready(function () {
    $(".navbar-nav .nav-item:nth-child(1) .nav-link").addClass("active");
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


    var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));

    function doParallax() {
        console.log("Scrolling");
        var el, elOffset, elHeight,
            offset = getViewportScroll(),
            vHeight = getViewportHeight();

        for (var i in images) {
            el = images[i];
            elOffset = el.offsetTop;
            elHeight = el.offsetHeight;

            if ((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) {
                continue;
            }

            el.style.backgroundPosition = '50% ' + Math.round((elOffset - offset) * 3 / 8) + 'px';
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
    var a = document.documentElement.clientHeight, b = window.innerHeight;
    return a < b ? b : a;
}

function getViewportScroll() {
    if (typeof window.scrollY != 'undefined') {
        return window.scrollY;
    }
    if (typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    var doc = document.documentElement;
    doc = doc.clientHeight ? doc : document.body;
    return doc.scrollTop;
}

