/*
setIterval()-invokes a function repeatedly after  number of milisecond.
it is a asynchronous function(doesnt pause execution)
*/

let count = 0;
let max = 10

let timer = setInterval(countUp, 1000)

function countUp(){
    count++;
    console.log(count)
    if(count >= max){
        clearInterval(timer)
    }
}