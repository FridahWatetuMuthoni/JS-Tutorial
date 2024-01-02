/*
Map = object that holds key, valu pairs of any data type
*/

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
])

let shopingCart = 0;

shopingCart += store.get("t-shirt")
shopingCart += store.get("jeans")
shopingCart += store.get("socks")
console.log(shopingCart)

store.set("hat",40)
store.set("phone",400)
store.set("laptop", 4222)
store.set("Calculator", 40)

store.delete("hat")

console.log(store.has("underwear"))
console.log(store.size)

store.forEach((value, key)=>{
    console.log(`Key:${key}, Value:${value}`)
})