const div = document.getElementById("div")
let x = 0
let y = 0
window.addEventListener("keydown",(e)=>{
    switch(e.key){
        case "ArrowDown":
            y += 5
            div.style.top = y + 'px'
            break
        
        case "ArrowUp":
            y-=5
            div.style.top = `${y}px`
            break
        
        case "ArrowRight":
            x+=5
            div.style.left = `${x}px`
            break
        
        case "ArrowLeft":
            x-=5
            div.style.left = `${x}px`
            break
        
    }
    console.log(`x:${x}, y:${y}`)
})