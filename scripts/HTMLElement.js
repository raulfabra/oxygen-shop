class HTMLElement {

    constructor(url) {
        this.url = url
    }

    getHTMLmodal() {
        const div = document.createElement('div')
        div.classList.add('popUp')
        const aside = document.createElement('aside')
        aside.classList.add('popUp__containerCross')
        aside.innerHTML = ` <img src = "./public/images/close.png" alt="cross__icon" class="popUp__containerCross--image" /> `
        const title = document.createElement('h2')
        title.classList.add('popUp__title')
        title.innerText = 'Subscribe to our newsletter'
        const form = document.createElement('form')
        form.classList.add('popUp__form')
        form.innerHTML = `
            <label for="correo" class="popUp__form--label">EMAIL</label>
            <input type="email" name="correo" id="correo" class="popUp__form--input" />

            <button type="submit" class="popUp__form--button">Send</button>
            
        `
        div.appendChild(aside)
        div.appendChild(title)
        div.appendChild(form)
        return div
    }

    insertHTMLmodal() {
        return document.getElementsByTagName('body')[0].append(this.getHTMLmodal())
    }

    validateAndSubmitForm() {
        const APItesting = new Api(this.url)
        const form = document.querySelector('.popUp__form')
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
    }

    closeHTMLmodal() {
        const exit_close = document.querySelector('.popUp__containerCross')
        const modalPopup = document.querySelector('.popUp')

        exit_close.addEventListener('click', () => {
            if (modalPopup) modalPopup.remove()
        })

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') modalPopup.remove()
        })

        document.addEventListener('click', (event) => {
            if (!modalPopup.contains(event.target)) modalPopup.remove()
        })
    }

}
