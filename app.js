let body = document.querySelector('body')
let main;

document.addEventListener('mousedown', e => {
    main = true
})
document.addEventListener('mouseup', e => {
    main = false
})
document.addEventListener('mousemove', e => {
    if (main == true) {
        let Element_name = document.createElement("div")
        Element_name.className = 'cur3';
        body.appendChild(Element_name)
        Element_name.style.top = `${e.pageY}px`
        Element_name.style.left = `${e.pageX}px`
        let random = Math.floor(Math.random()*255)
        let random1 = Math.floor(Math.random()*255)
        let random2 = Math.floor(Math.random()*255)
        Element_name.style.borderColor = `rgb(${random},${random1}, ${random2})`
        Element_name.style.boxShadow = `0px 0px 0.2rem rgb(${random},${random1}, ${random2})`   
    }
})