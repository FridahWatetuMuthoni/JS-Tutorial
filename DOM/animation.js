const btn = document.getElementById("anim-btn")
const mydiv = document.getElementById("mydiv")

btn.addEventListener("click",move_rotate_div)

function move_rotate_div(e){
    let timerId = null
    let degress = 0
    let x = 0
    let y = 0

    timerId = setInterval(frame,5)

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId)
        }
        else{
            degress+=3
            x+=1
            y+=1
            mydiv.style.left = x + 'px'
            mydiv.style.top = y + 'px'
            mydiv.style.transform = `rotateZ(${degress}deg)`

        }
    }
}

function rotate_div(e){
    let timerId = null
    let degress = 0

    timerId = setInterval(frame,5)

    function frame(){
        if(degress >= 360){
            clearInterval(timerId)
        }
        else{
            degress+=1
            let transform = `rotateX(${degress}deg)`  
            mydiv.style.transform = transform
        }
    }
}

function move_div(e){
    let timerId = null
    let x = 0
    let y = 0

    timerId = setInterval(frame,5)

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId)
        }
        else{
            x+=1
            y+=1
            mydiv.style.left = x + 'px'
            mydiv.style.top = y + 'px'
        }
    }
}