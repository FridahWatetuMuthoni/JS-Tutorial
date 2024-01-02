/*
object => A group of properties and methods.
properties => what an object has e.g. name, color.
methods = what an object can do e.g drive.
use . to access properties/methods.
this -> this keyword is a reference to a particular object.
the object depends on the immediate context
*/


const car1 = {
    model: "Mustang",
    color:"red",
    year: 2023,
    drive: function(this){
        //this.model is the same as car1.model
        console.log(`You drive ${this.model}`)
    },
    brake: function(){
        console.log("You step on the break")
    }
}


const car2 = {
    model: "Corvette",
    color:"blue",
    year: 2020,
    drive: function(this){
        console.log(`You drive ${this.model}`)
    },
    brake: function(){
        console.log("You step on the break")
    }
}

console.log(car1.model)
console.log(car1.year)
car1.drive()
car1.brake()

console.log(this)