$(".other-skills").removeClass("show-skills");


$(".other-skills-toggle").on("click", (() => {
    if ($(".other-skills").hasClass("show-skills")) {
        $(".other-skills").slideUp(function() {
            $(".other-skills").removeClass("show-skills");
        });
    } else {
        $(".other-skills").addClass("show-skills");
        setTimeout(function() {
            $(".other-skills").stop().slideDown();
        }, 200);
    }
}));