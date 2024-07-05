document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear()

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides__image');
    const totalSlides = slides.length;

    document.querySelector('.slides__button--next').addEventListener('click', () => {
        const slidesContainer = document.querySelector('.slides');
        if (currentSlide + 1 >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide + 1 < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide += 1;
        }
        const offset = -currentSlide * 600;
        slidesContainer.style.transform = `translateX(${offset}px)`;
    })
    document.querySelector('.slides__button--prev').addEventListener('click', () => {
        const slidesContainer = document.querySelector('.slides');
        if (currentSlide - 1 >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide - 1 < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide -= 1;
        }
        const offset = -currentSlide * 600; // 600 es el ancho de cada imagen
        slidesContainer.style.transform = `translateX(${offset}px)`;
    })

    setInterval(() => {
        const slidesContainer = document.querySelector('.slides');
        if (currentSlide + 1 >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide + 1 < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide += 1;
        }
        const offset = -currentSlide * 600; // 600 es el ancho de cada imagen
        slidesContainer.style.transform = `translateX(${offset}px)`;
    }, 3000);

})