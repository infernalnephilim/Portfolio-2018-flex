class ImageSlider {
    constructor(el, prev, next) {
        this.sliderSelector = el;
        this.slider = null;
        this.prev = prev;
        this.next = next;
        this.currentAngle = 0;

        this.generateImageSlider();
    }

    generateImageSlider() {
        this.slider = $(this.sliderSelector);
        $(this.prev).on("click", () => {
            console.log("klik prev");
            this.slidePrev(90)
        });
        $(this.next).on("click", () => {
                console.log("klik next");
                this.slideNext(90)
            }
        );
    }

    slidePrev(deg) {
        this.currentAngle = this.currentAngle - deg;
        this.changeSlide();
    }

    slideNext(deg) {
        this.currentAngle = this.currentAngle + deg;
        this.changeSlide();
    }

    changeSlide() {
        this.slider.css({
            "-webkit-transform": "rotateY(" + this.currentAngle + "deg)",
            "-moz-transform": "rotateY(" + this.currentAngle + "deg)",
            "-o-transform": "rotateY(" + this.currentAngle + "deg)",
            "transform": "rotateY(" + this.currentAngle + "deg)"
        });
    }
}