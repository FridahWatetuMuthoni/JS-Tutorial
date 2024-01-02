/*
promise => object that encapsulates the result of an asynchronus operation
let asynchronus methods return values like synchronous methods
"I promise to return something in the future" .
PROMISES STATES:
->Promises have two states 'pending','fulfilled' or 'rejected'
->the result is what can be returned
->Promises have two parts: producing and consuming
*/

//THE PRODUCING PART
const promise = new Promise((resolve, reject)=>{
    let fileLoaded = false;
    if(fileLoaded){
        resolve("File Loaded")
    }
    else{
        reject("File Not loaded")
    }
})

//THE COMSUMING PART: 
//then is executed when the promise is fullfilled->resolve()
//catch is executed when the promise is not fullfilled -> reject()
promise.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
