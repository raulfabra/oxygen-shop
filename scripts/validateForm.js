const formulario = document.querySelector('.contact__client')

formulario.addEventListener('submit', (event) => {

    event.preventDefault()

    // Validar Input Name
    const nombre = event.target.elements['name']
    const regexName = new RegExp(/^[^\d]*$/)

    if (nombre.value.length < 2 || nombre.value.length > 100 || !regexName.test(nombre.value)) {
        nombre.classList.add("contact__client__fillInput--inputError")
    }
    else nombre.classList.remove("contact__client__fillInput--inputError")

    // Validar Input Email
    const email = event.target.elements['email']
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const regex = new RegExp(re)

    if (!regex.test(email.value)) {
        email.classList.add("contact__client__fillInput--inputError")
    }
    else email.classList.remove("contact__client__fillInput--inputError")

    // Enviar los datos del formulario a la API de testing 
    // Si estan aceptados los Términos(terms) y Validados los campos del formulario.
    const terms = event.target.elements['terms']
    const APItesting = new Api('https://jsonplaceholder.typicode.com/posts')

    if (nombre.value.length > 2 && regex.test(email.value) && terms.checked) {
        APItesting.postRequest(
            {
                name: nombre.value,
                email: email.value
            }
        ).then(data => {
            alert("You're email was send successfully. Welcome!")
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        })
    }
})
