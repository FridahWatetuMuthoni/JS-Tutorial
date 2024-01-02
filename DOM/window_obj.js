/*
window =>iterface used to talk to web browser.
The DOM is a propery of the window
 */

console.dir(window)
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.pathname)

const btn = document.getElementById("btn")
btn.addEventListener('click', window.open("https://google.com"))
//btn.addEventListener('click', window.print())
//btn.addEventListener('click', window.close())