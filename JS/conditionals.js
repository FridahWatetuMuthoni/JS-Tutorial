// IF STATEMENTS
let age = 11

if(age > 18){
    console.log('You are an aldult')
}
else if(age < 0){
    console.log("You are not born yet")
}
else{
    console.log("You are a child")
}

//SWITCH STATEMENTS

let grade = 85;

switch(true){
    case grade >= 90:
        console.log("You did great");
        break;
    case grade >= 80:
        console.log("You did good");
        break;
    case grade >= 70:
        console.log("You did okay");
        break;
    case grade >= 60:
        console.log("You passed....barely");
        break;
    case grade >= 50:
        console.log("You failed");
        break;
    default:
        console.log(grade, 'is not a letter grade')
}

// AND CONDITIONALS

let temp = 15

if(temp > 0 && temp < 30){
    console.log('The weather is good')
}
else{
    console.log("The weather is bad")
}

//OR CONDITIONALS

let str = ""
let str2 = "The string is empty"
console.log(str || str2 )

//NOT CONDITIONALS
let is_sunny = false

if(!is_sunny){
    console.log("Its cloudy outside")
}
else{
    console.log("Its sunny outside")
}

//Ternary Operater
let my_age = 22
my_age > 18 ? console.log('You are an adult') : console.log("You are a child")