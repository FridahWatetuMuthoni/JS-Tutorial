let fruits = ["apple","orange","banana","lemon", "strawberry"]

//Adding an element at the end of the array
fruits.push("kiwi")
//Adding an element at the start of the array
fruits.unshift("mango")
//Removing an element at the end of the array
fruits.pop()
//Removing an element at the start of the array
fruits.shift()
//Getting the length of an array
fruits.length
//Getting the idex of an element
fruits.indexOf('banana')

let prices = [5, 10, 15, 20]
prices.forEach(element => console.log(element))


let numbers = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

for(let price of prices){
    console.log(price)
}

let sorted_fruits = fruits.sort()
for(let fruit of sorted_fruits){
    console.log(fruit)
}

let cards = ['A', '2','3','4', '5','6','7','8','9','10','J', 'K', 'Q']

function shuffle(array){
    let currentIndex = array.length
    while(currentIndex !=0 )
    {
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex--
        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}
shuffle(cards)
cards.forEach(card=>console.log(card))
console.log(cards)
