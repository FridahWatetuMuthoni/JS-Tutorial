/*
class => a class is a blueprint for creating objects,
define what properties and methods they have,
they use a constructor for unique properties.
Constructor=> is a special method of a class that accepts arguements and
assigns properties.
static => belongs to the class, not the objects.
properties: useful for caches, fixd-configuration methods
useful for utility functions.
Anything that is static belongs to the class and not the objects
super=> Refres to the parent class.Commonly used to invoke construtor of a parent class

*/

class Player{
    score = 0;

    pause(){
        console.log("You paaused the game")
    }

    exit(){
        console.log("You exited the game")
    }
}

const player_one = new Player()
console.log(player_one.score)
player_one.score ++;
console.log(player_one.score)
player_one.pause()
player_one.exit()

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

const student_one = new Student('Anna',25, 4.0)
console.log(student_one.age)
console.log(student_one.name)
student_one.study()


class Car{
    static number_of_cars = 0;

    constructor(model){
        this.model = model;
        Car.number_of_cars++;
    }
    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car_one = new Car("Mustang")
const car_two = new Car("Corvette")
const car_three = new Car("BMW")
const car_four = new Car("Ferrari")
const car_five = new Car("Lambo")
const car_six = new Car("Toyota")

console.log(Car.number_of_cars)
Car.startRace()

let number = 1.425
//example of a static method in javascript
// Math is a class and round is a static method
number = Math.round(number)

//INHERITANCE
/*
Inheritance is when a child class can inherit all the methods and properties
from another class 
*/

class Animals{
    alive = true

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is eating`)
    }
}

class Rabbit extends Animals{
    name = 'Rabbit'

    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animals{
    name = "Fish"

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animals{
    name = "Hawk"
    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const fish = new Fish()
console.log(fish.alive)
console.log(fish.eat())
console.log(fish.swim())

//The super keyword is used to invoke the class constructor

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class Dog extends Animal{
    constructor(name, age, runspeed){
        super(name, age)
        this.runspeed = runspeed
    }
}

class Shark extends Animal{
    constructor(name, age, swimspeed){
        super(name, age)
        this.swimspeed = swimspeed
    }
}

class Phoenix extends Animal{
    constructor(name, age, flyspeed){
        super(name, age)
        this.flyspeed = flyspeed
    }
}

const dog = new Dog("Scobby",25, 25)
const shark = new Shark('Baby Shark',10,35)
const phoenix = new Phoenix('Fridah',28, 45)

console.log(dog.name)
console.log(dog.runspeed)
console.log(dog.age)

console.log(shark.name)
console.log(shark.swimspeed)
console.log(shark.age)

console.log(phoenix.name)
console.log(phoenix.flyspeed)
console.log(phoenix.age)