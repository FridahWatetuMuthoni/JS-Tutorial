/*
callback-> a function passed as an arguement to another fuction
*/
sum(2,3,displayConsole)

function sum(x, y, callback){
    let result = x + y
    callback(result, displayDOM)
}

function displayConsole(output, callback){
    console.log(output)
    callback(output)
}
function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output
}