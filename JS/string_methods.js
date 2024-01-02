let username = "Bro code"

//STRING LENGTH
let username_length = username.length
console.log(username_length)

//CONVERTING A STRING TO LOWERCASE
let username_lowercase = username.toLowerCase()
console.log(username_lowercase)

//CONVERTING A STRING TO UPPERCASE
let username_uppercase = username.toUpperCase()
console.log(username_uppercase)

//GETTING THE LETTER AT A CERTAIN INDEX
let first_letter = username.charAt(0)
console.log(first_letter)

//GETTING THE FIRST OCCURRENCE OF A LETTER
let first_occurence_of_o = username.indexOf('o')
console.log(first_occurence_of_o)

//GETTING THE FIRST OCCURRENCE OF A LETTER
let last_occurence_of_o = username.lastIndexOf('o')
console.log(last_occurence_of_o)

//SPLITING A STRING INTO AN ARRAY
let word_array = username.split(" ")
console.log(word_array)

//REPLACING STUFF IN A STRING
let replace_word = username.replace('Bro', 'Siz')
console.log(replace_word)

//REPLACING ALL THE DASHES
let phone_number = "123-356-4564"
phone_number = phone_number.replaceAll('-', " ")
console.log(phone_number)

//STRING CONCATENATION
let str1 = "Hello"
let str2 = "World"
let str3 = str1.concat(str2)
console.log(str3)

//TRIMING WHITESPACE
let white_space = "   Hannah  "
console.log(white_space.trim())

//SLICING A STRING
let new_word = username.slice(1, 6)
console.log(new_word)
let full_name = "Bro Code"
let first_name = full_name.slice(0, full_name.indexOf(' '))
let last_name = full_name.slice(full_name.indexOf(' ')+1)
console.log(`First Name: ${first_name} Last Name: ${last_name}`)

/*
toLocaleString() Method:
toLocaleString() => returns a string with a language sensitive representation
of this number
number.toLocalString(locale, {options})
'locale' = specify that language (undefined = browser)
'options' = object with formatting options
*/

let num = 123456.789
let us = num.toLocaleString('en-US',{style:"currency", currency:"USD"})
console.log(us)
let hindi = num.toLocaleString('hi-IN',{style:"currency", currency:"INR"})
console.log(hindi)
let euros = num.toLocaleString('de-DE',{style:"currency", currency:"EUR"})
console.log(euros)
let germany = num.toLocaleString('de-DE')
console.log(germany)

let percent = num.toLocaleString(undefined, {style:"percent"})
console.log(percent)

let unit = num.toLocaleString(undefined, {style:"unit", unit:"celsius"})
console.log(unit)