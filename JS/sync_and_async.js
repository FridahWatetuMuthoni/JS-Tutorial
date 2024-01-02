/*
Synchronous code - Code executed in an ordered sequence.
                    Step by Step in a linear fashion
                    (Start Now, finish now)
Asynchronous Code - Code that is executed out of sequence
                    Example:    -Accessing a database,
                                -Fetching a file,
                                -Tasks that take time
                    (Start now, finish later)
*/ 

//Synchronous code

console.log("START")
console.log("This is Synchronous code")
console.log("END")

//Asynchronous Code

console.log("START")
setTimeout(()=>console.log("This is Asynchronous Code"),5000)
console.log("END")