function navBar () {
    const bottonMenú = document.querySelector('.header__icon')
    const menu = document.querySelector('.nav')
    
    bottonMenú.addEventListener('click', () => {
       menu.classList.toggle('nav--mobile')
    })

}