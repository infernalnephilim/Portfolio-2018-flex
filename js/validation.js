$(document).ready(function () {
    $('#contact-name').on('keyup paste', check_name);
    $('#contact-mail').on('keyup paste', check_mail);
    $('#contact-text').on('keyup paste', check_text);
});
$(function () {
    $("#submit").on("click", function () {
        check_name();
        check_mail();
        check_text();
        const name = $("#contact-name").val();
        const mail = $("#contact-mail").val();
        const text = $("#contact-text").val();

        if(check_name() && check_mail() && check_text()){
            $.post("send.php", {
                nameV: name,
                emailV: mail,
                textV: text
            }, function (data) {
                $('#contact-form')[0].reset();
                // $("#contact-name").removeClass("not-correct");
                // $("#contact-mail").removeClass("not-correct");
                // $("#contact-text").removeClass("not-correct");
                $('#message-sent').html("Wiadomość została wysłana");
                $('#message-sent').fadeIn('slow');
                $('#message-sent').delay(5000).fadeOut('slow');
            });
        } else {
            $('#message-sent-failed').html("Uzupełnij poprawnie wszystkie pola i spróbuj ponownie");
            $('#message-sent-failed').fadeIn('slow');
            $('#message-sent-failed').delay(5000).fadeOut('slow');
        }


    });
    $("#contact-name").change(function () {
        check_name();
    });
    $("#contact-mail").change(function () {
        check_mail();
    });
    $("#contact-text").change(function () {
        check_text();
    });
});

function check_name() {
    var name = $("#contact-name").val();
    if (name == '') {
        $("#name-valid").html("To pole nie może być puste!");
        $("#name-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact-name").addClass("not-correct");
        return false;
    } else {
        $("#contact-name").removeClass("not-correct");
        $("#name-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
        return true;
    }
}

function check_mail() {
    var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    var name = $("#contact-mail").val();
    if (name == '') {
        $("#topic-valid").html("To pole nie może być puste!");
        $("#topic-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        // $("#contact-mail").addClass("is-invalid");
        $("#contact-mail").addClass("not-correct");
    } else {
        if (!wzor.test(name)) {
            $("#topic-valid").html("Podany adres E-Mail jest niepoprawny!");
            $("#topic-valid").show("bounce", {
                direction: 'up'
            }, "ease", 3000);
            $("#contact-mail").addClass("not-correct");
            return false;
        } else {
            $("#contact-mail").removeClass("not-correct");
            $("#topic-valid").hide("fade", {
                direction: 'up'
            }, "ease", 3000);
            return true;
        }

    }
}

function check_text() {
    var name = $("#contact-text").val();
    if (name == '') {
        $("#text-valid").html("To pole nie może być puste!");
        $("#text-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact-text").addClass("not-correct");
        $("#contact-name").focus(function () {

        });
        return false;
    } else {
        $("#contact-text").removeClass("not-correct");
        $("#text-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
        return true;
    }
}
