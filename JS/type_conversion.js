//CONVERTING STRING TO NUMBER
let age = '20'
console.log(typeof age)
age = Number(age)
console.log(typeof age)
age += 1
console.log(`Happy Birthday you are ${age} years old`)

//CONVERTING NUMBER TO STRING

let num = 3.145
num = String(num)
console.log(typeof num)

console.log(parseInt("3 blind mice")) // =>3
console.log(parseFloat("3.14 meters")) //=>3.14
console.log(parseInt("-12.34")) // => -12
parseInt("0xFF") // => 255
parseInt("-0XFF") // => -255
parseFloat(".1") // => 0.1
parseInt("0.1") // => 0
parseInt(".1") // => NaN: integers can't start with "."
parseFloat("$72.47") // => NaN: numbers can't start with "$"
parseInt("077", 10) // => 77: (7*10 + 7)
parseInt("ff", 16) // => 255: (15*16 + 15)
parseInt("11", 2) // => 3: (1*2 + 1)

