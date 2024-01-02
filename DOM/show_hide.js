const toggle_btn = document.getElementById("img-btn")
const image = document.getElementById("image-div")

toggle_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(image.style.display == "none"){
        image.style.display = "block"
    }
    else{
        image.style.display="none"
    }
})