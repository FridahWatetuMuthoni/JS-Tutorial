/*
Error - object with a description of something that went wrong.
Cant open a file, Lose connection, user types incorrect input, TypeError.
throw - executes a user-defined error
*/

try{
    let number = prompt("Enter a number: ")
    number = Number(number.trim())
    if(isNaN(number)){
        throw "That wasnt a number"
    }
    if(number == ""){
        throw "The input cant be empty"
    }
    console.log(`${number} is a number`)
}
catch(error){
    console.log(error)
}
finally{
    console.log("This always executes")
}