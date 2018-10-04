class ImageSlider {
    constructor(el, prev, next, options) {
        this.default = {type: "slide"};
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
        console.log(this.slides);

        if (this.default.type === "cube") {
            this.rotateAngle = 360 / this.slidesLength;
            if (this.currentSlide === 0) {
                $(this.prev).addClass("disabled-ctrl");
            }
            for (let i = 0; i < this.slidesLength; i++) {
                console.log(i);
                $(this.slides[i]).css({
                    "-webkit-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-moz-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-ms-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "-o-transform": "rotate(" + (i * this.rotateAngle) + ");",
                    "transform": "rotate(" + (i * this.rotateAngle) + ");",
                });
            }
        }

        if (this.default.type === "slide") {
            if (this.currentSlide === 0) {
                $(this.prev).addClass("disabled-ctrl");
            }
            for (let i = 0; i < this.slidesLength; i++) {
                console.log(i);
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
            console.log("klik prev");
            this.slidePrev()
        });
        $(this.next).on("click", () => {
                console.log("klik next");
                this.slideNext()
            }
        );
        this.slider.addEventListener("swap", function (event) {
            alert('Swaped ' + event.detail.direction + ' at ' + event.target.id);
        }, false);
    }

    slidePrev() {
        if (this.default.type === "cube") {
            this.currentAngle = this.currentAngle - this.rotateAngle;
            this.changeSlide();
        }
        if (this.default.type === "slide") {
            if (this.currentSlide > 0) {
                this.currentSlide -= 1;
                this.changeSlide();
            }

        }

    }

    slideNext() {
        if (this.default.type === "cube") {
            this.currentAngle = this.currentAngle + this.rotateAngle;
            this.changeSlide();
        }
        if (this.default.type === "slide") {
            if (this.currentSlide < this.lastSlide) {
                this.currentSlide += 1;
                console.log(this.currentSlide);
                this.changeSlide();
            }
        }
    }

    changeSlide() {
        if (this.default.type === "cube") {
            this.slider.css({
                "-webkit-transform": "rotateY(" + this.currentAngle + "deg)",
                "-moz-transform": "rotateY(" + this.currentAngle + "deg)",
                "-o-transform": "rotateY(" + this.currentAngle + "deg)",
                "transform": "rotateY(" + this.currentAngle + "deg)"
            });
        }
        if (this.default.type === "slide") {
            if (this.currentSlide == 0) {
                $(this.prev).addClass("disabled-ctrl");
            } else if (this.currentSlide == this.lastSlide) {
                $(this.next).addClass("disabled-ctrl");
            } else {
                if ($(this.prev).hasClass("disabled-ctrl")) {
                    $(this.prev).removeClass("disabled-ctrl");
                }
                if ($(this.next).hasClass("disabled-ctrl")) {
                    $(this.next).removeClass("disabled-ctrl");
                }

            }
            console.log("SLIDE");
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