
$(".other-skills-toggle").on("click", (() => {
    $(".other-skills").toggleClass("collapse");
    $(".fa-arrow-down").toggleClass("collapse");
    //$(".other-skills-wrapper").slideShow(4000,'easeOutQuart');
   //$(".other-skills-wrapper").slideHide(320,'easeOutQuart');
    // $(".other-skills-wrapper").slideToggle('slow', () => {
    //
    // });

    // if ($(".other-skills").hasClass("show-skills")) {
    //     $(".other-skills").slideUp(function() {
    //         $(".other-skills").removeClass("show-skills");
    //     });
    // } else {
    //     $(".other-skills").addClass("show-skills");
    //     setTimeout(function() {
    //         $(".other-skills").stop().slideDown();
    //     }, 200);
    // }
}));