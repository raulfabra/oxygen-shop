class Slider {

    constructor(slideClass, slidesClass) {
        this.currentIndex = 0
        this.slide = document.querySelectorAll(slideClass)
        this.slides = document.querySelector(slidesClass)
        this.dots = document.querySelectorAll('.dot')
    }

    getSlider(idHTML) {
        return document.getElementById(idHTML)
    }

    pressNext(next) { this.autoSlide(next) }

    pressPrev(prev) { this.autoSlide(prev) }

    autoSlide(displace) {
        let indexSlider
        if (displace === 'next') indexSlider = this.currentIndex + 1
        else if (displace === 'prev') indexSlider = this.currentIndex - 1
        else indexSlider = undefined

        let totalSlides = this.slide.length

        if (indexSlider < 0) {
            this.currentIndex = totalSlides - 1;
        } else if (indexSlider >= totalSlides) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = indexSlider;
        }

        const offset = -this.currentIndex * 100 + '%';
        this.slides.style.transform = `translateX(${offset})`;

        this.dots[this.currentIndex].classList.toggle('dot--active')

        if (this.currentIndex - 1 >= 0 && this.currentIndex < 4) {
            this.dots[this.currentIndex - 1].classList.toggle('dot--active')
        }
        if (this.currentIndex - 1 < 0) {
            this.dots[3].classList.toggle('dot--active')
        }
    }
}