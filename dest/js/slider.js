class ImageSlider {
    constructor(el, prev, next, options) {
        const defaultOptions = {type: "slide"};
        this.options = Object.assign({}, defaultOptions, options);
        this.sliderSelector = el;
        this.slider = null;
        this.slides = null;
        this.slidesLength = null;
        this.prev = prev;
        this.next = next;
        this.rotateAngle = null;
        this.currentAngle = 0;
        this.currentSlide = 0;
        this.lastSlide = null;
        this.generateImageSlider();
    }

    generateImageSlider() {
        this.slider = $(this.sliderSelector);
        this.slides = this.slider.children();
        this.slidesLength = this.slides.length;
        this.lastSlide = this.slidesLength - 1;

        if (this.options.type === "cube") {
            this.rotateAngle = 360 / this.slidesLength;
            if (this.currentSlide === 0) {
                $(this.prev).addClass("disabled-ctrl");
            }
            for (let i = 0; i < this.slidesLength; i++) {
                $(this.slides[i]).css({
                    "-webkit-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-moz-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-ms-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-o-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "transform": "rotate(" + (i * this.rotateAngle) + ");",
                });
            }
        }

        if (this.options.type === "slide") {
            if (this.currentSlide === 0) {
                $(this.prev).addClass("disabled-ctrl");
            }
            for (let i = 0; i < this.slidesLength; i++) {
                $(this.slides[i]).css({
                    "-webkit-transform": "translate(" + (i * 100) + "%, 0);",
                    "-moz-transform": "translate(" + (i * 100) + "%, 0);",
                    "-ms-transform": "translate(" + (i * 100) + "%, 0);",
                    "-o-transform": "translate(" + (i * 100) + "%, 0);",
                    "transform": "translate(" + (i * 100) + "%, 0);"
                });
            }
        }


        $(this.prev).on("click", () => {
            this.slidePrev()
        });
        $(this.next).on("click", () => {
                this.slideNext()
            }
        );
    }

    slidePrev() {
        if (this.options.type === "cube") {
            this.currentAngle = this.currentAngle - this.rotateAngle;
            this.changeSlide();
        }
        if (this.options.type === "slide") {
            if (this.currentSlide > 0) {
                this.currentSlide -= 1;
                this.changeSlide();
            }
        }
    }

    slideNext() {
        if (this.options.type === "cube") {
            this.currentAngle = this.currentAngle + this.rotateAngle;
            this.changeSlide();
        }
        if (this.options.type === "slide") {
            if (this.currentSlide < this.lastSlide) {
                this.currentSlide += 1;
                console.log(this.currentSlide);
                this.changeSlide();
            }
        }
    }

    changeSlide() {
        if (this.options.type === "cube") {
            this.slider.css({
                "-webkit-transform": "rotateY(" + this.currentAngle + "deg)",
                "-moz-transform": "rotateY(" + this.currentAngle + "deg)",
                "-o-transform": "rotateY(" + this.currentAngle + "deg)",
                "transform": "rotateY(" + this.currentAngle + "deg)"
            });
        }
        if (this.options.type === "slide") {
            if (this.currentSlide === 0) {
                $(this.prev).addClass("disabled-ctrl");
            } else if (this.currentSlide === this.lastSlide) {
                $(this.next).addClass("disabled-ctrl");
            } else {
                if ($(this.prev).hasClass("disabled-ctrl")) {
                    $(this.prev).removeClass("disabled-ctrl");
                }
                if ($(this.next).hasClass("disabled-ctrl")) {
                    $(this.next).removeClass("disabled-ctrl");
                }
            }
            this.slider.css({
                "-webkit-transform": "translate(" + -this.currentSlide * 100 + "%, 0);",
                "-moz-transform": "translate(" + -this.currentSlide * 100 + "%, 0);",
                "-ms-transform": "translate(" + -this.currentSlide * 100 + "%, 0);",
                "-o-transform": "translate(" + -this.currentSlide * 100 + "%, 0);",
                "transform": "translate(" + -this.currentSlide * 100 + "%, 0);"
            });
        }
    }
}

const slide = new ImageSlider('.carousel__content', '.nav-left', '.nav-right');