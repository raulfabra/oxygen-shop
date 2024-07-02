class HtlmElement {

    constructor(){}

    getHtmlModal() {
        const div = document.createElement('div')
        div.classList.add('popUp')
        const title = document.createElement('h2')
        title.classList.add('popUp__title')
        title.innerText = 'Subscribe to our newsletter'
        const form = document.createElement('form')
        form.method = 'POST'
        form.action = '/'
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
    
}