
$(".other-skills-toggle--current").on("click", (() => {
    $(".other-skills--current").toggleClass("collapse");
    $(".other-skills-toggle__arrow--current").toggleClass("collapse");
}));
$(".other-skills-toggle--future").on("click", (() => {
    $(".other-skills--future").toggleClass("collapse");
    $(".other-skills-toggle__arrow--future").toggleClass("collapse");
}));