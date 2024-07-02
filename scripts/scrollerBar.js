function scrollerBar () {

    const scrollerBar = document.querySelector('.scroller__bar--x')
    
    window.addEventListener("scroll", () => {
        let h = document.documentElement || document.body // height
        
        let st = h.scrollTop || document.body.scrollTop //scroll top
        let sh = h.scrollHeight || document.body.scrollHeight //scroll height
        
        let percent = Math.round(st / (sh - h.clientHeight) * 100);
        
        
        if(percent > 0){
            scrollerBar.style.width = percent + "%"
            scrollerBar.style.padding = ".3em"
        } 
        else scrollerBar.style.padding = "0em"

    })
}