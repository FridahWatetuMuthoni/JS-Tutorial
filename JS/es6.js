/*
Spread Operator->Allows an iterable such as an array or string to be 
expanded in places where zero or more arguemnets are expected(unpacks the elements)
*/

let numbers = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]

let numbers_two = [...numbers]
console.log(numbers_two)

let maximum = Math.max(...numbers_two)
console.log(maximum)

let class1 = ['spongebob', 'patrick', 'sandy']
let class2 = ['Squidward', 'Mr.krabs', 'plankton']
let all_classes = [...class1, ...class2]
console.log(all_classes)

/*
rest parameters: represents an indefinite numbe of parameters
*/
function addition(...args){
    let result = 0
    for(let element of args){
        result += element
    }
    return result
}

let result = addition(10,20,30,40,50,60)
console.log(result)

/*
array.forEach() = executes a provided callback function once for each array
element
*/

let strings = ['squidward', 'mr.krabs', 'plankton','spongebob', 'patrick', 'sandy']

function capitalize_letter(element, index, array){
    array[index] = element[0].toUpperCase() + element.slice(1)
}

function print(element){
    console.log(element)
}

strings.forEach(capitalize_letter)
strings.forEach(print)

/*
array.map() = executes a provided callback function once for each array elemnt
and it creates and returns a new array
*/
let nums = [1, 2, 3, 4, 5]
let squares = nums.map(square)

function square(element){
    return Math.pow(element,2)
}
function print(element){
    console.log(element)
}
squares.forEach(print)

console.log("#######################################")

/*
array.filter()= creates a new array with all elements that pass the test provided 
by a function
*/

let ages = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]

let older_than_50 = ages.filter(checkAge)

older_than_50.forEach(print)

function checkAge(element){
    if(element > 50){
        return element
    }
}

/*
array.reduce()=> reduces an array to a single value
*/
let prices = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]

let total = prices.reduce(checkOut)

function checkOut(total,element){
    return total + element
}
console.log(total)

//Sorting an array
let grades = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]


let descend_grades = grades.sort(descendingSort)
descend_grades.forEach(print)

let ascend_grades = grades.sort(ascendingSort)
ascend_grades.forEach(print)

function descendingSort(x, y){
    return y - x
}

function ascendingSort(x, y){
    return x - y
}

//Arrow functions

const multiplication = (a, b)=>{
    return a * b;
}
console.log(multiplication(20, 10))