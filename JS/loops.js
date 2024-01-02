//WHILE LOOP

function get_user_input(){
    let username;
    while(true){
        username = prompt('Enter your username: ')
        if(username.trim()){
            return username
        }
    }
}
//let username = get_user_input()
//console.log(username)

let i = 0;
while(i < 5){
    console.log(i)
    i++
}

//DO WHILE LOOP
function using_dowhile_loop(){
    let username;
    do{
        username = prompt("Enter you name: ")
    }while(username == "")
    console.log(username)
}
//using_dowhile_loop()

//FOR LOOP

let numbers = [20, 45, 41, 89, 65, 75, 69, 78, 41, 63, 45, 63, 25, 14]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

/*
Break -> the break key word is used when you want to break out of a loop
Continue-> the continue keyword is used when you want to break out of the 
current iteration in the loop
*/

//BREAK

for(let i = 1; i <= 20; i++){
    if(i === 13){
        break
    }
    console.log(i)
}

//CONTINUE

for(let i = 1; i <= 20; i++){
    if(i === 13){
        continue
    }
    console.log(i)
}

// NESTED LOOP

function print_pattern(num){
    for(let i = 0; i < num; i++){
        for(let j = i; j < num; j++){
            console.log('*')
        }
    }
}
print_pattern(5)