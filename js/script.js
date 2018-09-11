
$(function () {
    $("#s1-text").load("about-me/about-me.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    // $("#s2-text").load("umiejetnosci.html", function (response, status, xhr) {
    //     if (status == "error") {
    //         var msg = "Wystąpił błąd podczas ładowania strony: ";
    //         $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //     }
    // });
    // $("#s3-text").load("edukacja.html", function (response, status, xhr) {
    //     if (status == "error") {
    //         var msg = "Wystąpił błąd podczas ładowania strony: ";
    //         $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //     }
    // });
    // $("#s4-text").load("portfolio.html", function (response, status, xhr) {
    //     if (status == "error") {
    //         var msg = "Wystąpił błąd podczas ładowania strony: ";
    //         $("#error").html(msg + xhr.status + " " + xhr.statusText);
    //     }
    // });
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


});

const app = (() => {
    $(".navbar").addClass("nav-inactive");
    $(".nav-icon").on("click",(()=>{
        //alert("KLIK");
        $(".navbar").toggleClass("nav-inactive","nav-active");
    }));

    var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
    function getViewportHeight() {
        var a = document.documentElement.clientHeight, b = window.innerHeight;
        return a < b ? b : a;
    }
    function getViewportScroll() {
        if(typeof window.scrollY != 'undefined') {
            return window.scrollY;
        }
        if(typeof pageYOffset != 'undefined') {
            return pageYOffset;
        }
        var doc = document.documentElement;
        doc = doc.clientHeight ? doc : document.body;
        return doc.scrollTop;
    }
    function doParallax() {
        console.log("Scrolling");
        var el, elOffset, elHeight,
            offset = getViewportScroll(),
            vHeight = getViewportHeight();

        for(var i in images) {
            el = images[i];
            elOffset = el.offsetTop;
            elHeight = el.offsetHeight;

            if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

            el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
        }
    }
    1
    Gator(window).on('scroll', doParallax);

})();