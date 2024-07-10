document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear()

    const slider = new Slider('.slide', '.slides')

    setInterval(() => {
        slider.autoSlide('next')
    }, 3000)

    document.querySelector('.slide__button--prev').addEventListener('click', () => {
        slider.pressPrev('prev')
    })

    document.querySelector('.slide__button--next').addEventListener('click', () => {
        slider.pressNext('next')
    })

})