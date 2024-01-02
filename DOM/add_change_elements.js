/*
Adding and Changing HTML Elements
.innerHTML(vulnerable to XSS attacks)
.textContent(more secure)
*/
const body = document.getElementById("container")
body.style.backgroundColor = "#222222"
body.style.color = "rgb(50, 200, 250)"
body.style.fontFamily = "consolas"
body.style.border = "2px solid black"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.flexDirection = "column"
body.style.minHeight = "100vh"



const titles = document.getElementById("titles")
let h2 = document.createElement("h2")
h2.textContent = "Just adding elements using javascript"
titles.append(h2)

//ADDING ELEMENTS IN A LIST

const fruits = document.getElementById("fruits")
const fruits_list = document.getElementsByTagName('li')

const mango = document.createElement('li')
mango.textContent = "mango"
mango.style.color = "purple"
fruits.append(mango)

const pineapple = document.createElement('li')
pineapple.textContent = "pineapple"
pineapple.style.color = "purple"
fruits.prepend(pineapple)


const watermelon = document.createElement('li')
watermelon.textContent = "watermelon"
watermelon.style.color = "purple"
fruits.insertBefore(watermelon, fruits_list[3])