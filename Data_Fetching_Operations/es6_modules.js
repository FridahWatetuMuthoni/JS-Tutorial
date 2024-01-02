/*
The idea behind a module is that its a file of reusable code
We can import sections of pre-written code to use whenever we want
It is great for any general utility values and functions
Helps to make your code more reuseable and maintainable
Think of modules as seperate chapters of a book 
*/

import { getCircumference, getArea } from "./math_utils";

let radius = 14

console.log(getCircumference(radius))
console.log(getArea(radius))