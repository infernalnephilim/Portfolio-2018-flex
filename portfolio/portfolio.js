var carouselContent = $(".carousel__content");
var carouselIndex = 0;
var carouselLength = carouselContent.children.length;

var isChanging = false;
var firstItem = $(carouselContent.children[0]);
var lastItem = $(carouselContent.children[carouselLength - 1]);
var itemWidth = 100 / carouselLength;

var firstClone = null;
var lastClone = null;


$(".nav-left").on("click", () => {

});
$(".nav-right").on("click", function () {

});

const slide = new ImageSlider('.carousel__content','.nav-left','.nav-right');