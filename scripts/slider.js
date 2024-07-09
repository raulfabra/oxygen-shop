document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear()

    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.length;

    document.querySelector('.slide__button--next').addEventListener('click', () => {
        index = currentIndex + 1

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + '%';
        slides.style.transform = `translateX(${offset})`;
    })
    document.querySelector('.slide__button--prev').addEventListener('click', () => {

        index = currentIndex - 1

        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100 + '%';
        slides.style.transform = `translateX(${offset})`;
    })

    function autoSlide() {
        setInterval(() => {
            index = currentIndex + 1

            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }

            const offset = -currentIndex * 100 + '%';
            slides.style.transform = `translateX(${offset})`;
        }, 3000);
    }

    let slideInterval = setInterval(autoSlide, 3000);

    document.querySelector('.slider').addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.slider').addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 3000);
    });

})