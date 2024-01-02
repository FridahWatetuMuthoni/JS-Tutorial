/*
.firstElementChild
.lastElementChild
.parentElement
.netElementSibling
.previousElementSibling
.children[]
Array.from(.children)
*/

let element = document.body
let first_child = element.firstElementChild
console.log(first_child)
first_child.style.backgroundColor = "lightgreen"
let last_child = element.lastElementChild
console.log(last_child)

let vegetables = document.querySelector("#vegetables")
let vegetables_parent = vegetables.parentElement
let vegetables_next_sibling = vegetables.nextElementSibling
let vegetables_previous_sibling = vegetables.previousElementSibling

let fruits = document.querySelector("#fruit")
let fruits_children = fruits.children
let children_array = Array.from(fruits_children)
console.log(children_array)