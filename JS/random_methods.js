//geting a random number bewteen 0 and 5
let  number = Math.random() * 6

//Removing the decimal parts
number = Math.floor(number)
console.log(number)


let colors = ['purple', 'yellow', 'red','green','blue']
let random_index =Math.floor(Math.random() * colors.length)
let random_color = colors[random_index]
console.log(random_color)