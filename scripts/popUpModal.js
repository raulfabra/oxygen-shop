function popUp_Modal() {
    //Crear Modal
    const modal = new HTMLElement('https://jsonplaceholder.typicode.com/posts')
    //Guardar en el Storage
    localStorage.setItem('popUp', modal)
    //Mostrar el Modal
    modal.insertHTMLmodal()
    // Validar el email y enviar información al servidor
    modal.validateAndSubmitForm()
    // Cerrar el modal
    modal.closeHTMLmodal()

}

setTimeout(() => {
    if (!localStorage.getItem("popUp")) popUp_Modal()
    else return
}, 5000)