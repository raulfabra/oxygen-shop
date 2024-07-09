document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear()

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slidess = document.querySelector('.slides')
    const totalSlides = slides.length;

    document.querySelector('.slide__button--next').addEventListener('click', () => {
        index = currentIndex + 1

        if (index < 0) {
            currentIndex = totalSlides - 1
        } else if (index >= totalSlides) {
            currentIndex = 0
        } else {
            currentIndex = index
        }

        const offset = -currentIndex * 100 + '%'
        slidess.style.transform = `translateX(${offset})`
    })
    document.querySelector('.slide__button--prev').addEventListener('click', () => {

        index = currentIndex - 1

        if (index < 0) {
            currentIndex = totalSlides - 1
        } else if (index >= totalSlides) {
            currentIndex = 0
        } else {
            currentIndex = index
        }

        const offset = -currentIndex * 100 + '%';
        slidess.style.transform = `translateX(${offset})`;
    })

    setInterval(() => {
        index = currentIndex + 1

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + '%';
        slidess.style.transform = `translateX(${offset})`;

    }, 3000);
})