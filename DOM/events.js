/*
The default is event bubbling that handles the inner elements before the parrent
But if you want to handle the parent first before the children you add true
after the callback function in the addEventlistener function
*/

const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("just clicked the button")
});

const body = document.body
body.addEventListener("load",(e)=>{
    e.preventDefault()
    alert("The body just loaded")
})

const username = document.getElementById("username")
username.addEventListener('change',(e)=>{
    e.preventDefault()
    console.log(username.value)
})

const mydiv = document.getElementById("mydiv")
mydiv.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    mydiv.style.backgroundColor = "purple"
})
mydiv.addEventListener("mouseout",(e)=>{
    e.preventDefault()
    mydiv.style.backgroundColor = "lightgreen"
})

mydiv.addEventListener("mousedown",(e)=>{
    e.preventDefault()
    mydiv.style.backgroundColor = "yellow"
})

mydiv.addEventListener("mouseup",(e)=>{
    e.preventDefault()
    mydiv.style.backgroundColor = "red"
})

const innerDiv = document.getElementById("inner-div")
innerDiv.addEventListener("click",(e)=>{
    e.preventDefault()
    innerDiv.style.backgroundColor = "blue"
})
const outerDiv = document.getElementById("outer-div")
outerDiv.addEventListener("click",(e)=>{
    e.preventDefault()
    outerDiv.style.backgroundColor = "yellow"
},true)