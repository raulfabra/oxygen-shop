const APItesting = new Api('https://jsonplaceholder.typicode.com/posts')

setTimeout(() => {
    document.getElementsByTagName('body')[0].append(new HtlmElement().getHTMLmodal())

    const form = document.querySelector('.popUp__form')

    // Validar el email y enviar información al servidor
    form.addEventListener('submit', (event) => {

        event.preventDefault()

        const email = event.target.elements['correo']
        const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const regex = new RegExp(re)

        if (regex.test(email.value)) {
            email.style.borderColor = 'black'
            APItesting.postRequest(
                {
                    email: email.value
                }
            ).then(data => console.log(data))
        }
        else email.style.borderColor = 'red'

    })
}, 5000)