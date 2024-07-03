class HtlmElement {

    constructor() { }

    getHTMLmodal() {
        const div = document.createElement('div')
        div.classList.add('popUp')
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

        div.appendChild(title)
        div.appendChild(form)
        return div
    }

    insertHTMLmodal() {
        return document.getElementsByTagName('body')[0].append(this.getHTMLmodal())
    }

}