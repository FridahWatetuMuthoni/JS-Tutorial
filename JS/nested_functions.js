/*
nested functions = functions inside other functions.
Outer functions have access to inner functions.
Inner functions are 'hidden from outside the outer functions.
They are used for closures
*/

let username = "Bro"
let userInbox = 0

function login(){
    function display_username(){
        console.log(`Welcome ${username}`)
    }

    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }

    display_username()
    displayUserInbox()
}

login()