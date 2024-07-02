document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        document.getElementsByTagName('body')[0].append(new HtlmElement().getHtmlModal())
        //modal.classList.add("visible")
    }, 5000)

    navBar()

    scrollerBar()

    validateForm()

    onChangeCurrency()

})
