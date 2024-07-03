const scrollerBar = document.querySelector('.scroller__bar--x')


document.addEventListener("scroll", () => {
    let h = document.documentElement || document.body // height del documento, Tanto para aquel que disponga de acceso a la etiqueta html como para el que simplemente accede mediante el body

    let st = h.scrollTop || document.body.scrollTop
    let sh = h.scrollHeight || document.body.scrollHeight

    let percent = Math.round(st / (sh - h.clientHeight) * 100);


    if (percent > 0) {
        scrollerBar.style.width = percent + "%"
        scrollerBar.style.padding = ".3em"
    }
    else scrollerBar.style.padding = "0em"

    if (percent >= 25) { }

})
