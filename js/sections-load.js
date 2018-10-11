$(function () {
    $("#s1-text").load("about-me/about-me-section.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Wystąpił błąd podczas ładowania strony: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#s1-b-text").load("what-can-i-do-for-you/what-can-i-do-for-you.html", function (response, status, xhr) {
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
});