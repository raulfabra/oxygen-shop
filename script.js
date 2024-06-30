document.addEventListener('DOMContentLoaded', () => {
    const bottonMenú = document.querySelector('.header__icon')
    const menu = document.querySelector('.nav')
    
    bottonMenú.addEventListener('click', () => {
       menu.classList.toggle('nav--mobile')
    })

    const formulario = document.querySelector('.contact__client')

    formulario.addEventListener('submit', (event) => {
        event.preventDefault()
        const nombre = document.getElementById('name')
        const email  = document.getElementById('email')
        const checkbox = document.getElementById('terms')

        if (nombre.value.length <= 1){
            console.log('sigue mal')
            nombre.style.borderBottomColor = 'red'
        } else nombre.style.borderBottomColor = '#95989A'

        const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const regex = new RegExp(re)

        if (!regex.test(email.value)){
            console.log('email sigue mal')
            email.style.borderBottomColor = 'red'
        } else email.style.borderBottomColor = '#95989A'
    })
})
