/*
API ->Application Object Model
DOM ->Document Object Model is an API for changing the content of the HTML
page
document is the entry to our DOM
*/
console.log(document)
console.dir(document)
console.log(document.URL)
console.log(document.location.port)
console.log(document.domain)
console.log(document.title)
console.log(document.location)
document.body.style.backgroundColor = "skyblue"

//Selecting elements from the DOM

//CHANGING THE CSS OF THE PAGE USING CSS
let title = document.getElementById("title")
title.style.backgroundColor = "aqua"
title.style.color="white"
title.style.padding = "20px"

//document.getElementsByName()
let fruits = document.getElementsByName("fruits")
fruits.forEach((fruit)=>{
    if(fruit.checked){
        console.log(fruit.value)
    }
})

//document.getElementsByTagName()
let vegetables = document.getElementsByTagName('li')
vegetables[2].style.backgroundColor = "purple"

//document.getElementsByClassName()
let desserts = document.getElementsByClassName("desserts")
desserts[2].style.backgroundColor = "purple"

//document.querySelector()
let subtitle = document.querySelector("#subtitle")
subtitle.style.color = "pink"
let elements = document.querySelectorAll('.desserts')
elements.forEach((element)=>{
    element.style.color = "yellow"
})
