/*
setTimeout()- invokes a function after a number of miliseconds.
setTimeout is an asynchronus function(doesnt pause execution of your program)
setTimeout(callback function, time)
*/

function firstMessage(){
    alert("Buy this course for $500!");
}

function secondMessage(){
    alert("This is not a scam!")
}

function thirdMessage(){
    alert("DO IT!")
}

let timer_one = setTimeout(firstMessage, 3000)
let timer_two = setTimeout(secondMessage, 6000)
let timer_three = setTimeout(thirdMessage, 9000)

const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    clearTimeout(timer_one)
    clearTimeout(timer_two)
    clearTimeout(timer_three)
    console.log("Thanks for buying")
})
