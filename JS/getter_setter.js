/*
Get = binds an object property to a function when that
property is accessed
set = binds an object property to a functiom when that property is assigned to a value
*/

class Car{
    constructor(power){
        this._power = power;
        this._gas = 25
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }

    set gas(value){
        if(value > 50){
            value = 50
        }
        else if(value < 0){
            value = 0
        }
        this._gas = value
    }
}

let car  = new Car(400)
console.log(car.power)
console.log(car.gas)