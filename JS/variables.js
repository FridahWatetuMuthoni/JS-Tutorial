//String Data Type
let name = "Fridah"

//Number Data Type
let age = 28;

//Floats data type
let PI = 3.14

//Booleans
let is_raining = false

//Using strng literals
console.log(`My name is ${name} and my age is ${age}`)

//VARIABLES SCOPE

function checking_scope(){
    var username = "Fridah"
    let city = "Nairobi"
        
    console.log(username)
    console.log(city)
}

for(var i = 0; i < 10; i++){
    //console.log(i)
}
console.log(i)