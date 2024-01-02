/*
The date object is used to work with dates and times
*/

let date = new Date()
console.log(new Date(0).toLocaleString())
console.log(date.toLocaleString())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate())
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMilliseconds())

function formatDate(date){
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${month} ${day} ${year}`
}

function formatTime(date){
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let am_or_pm = hours >= 12 ? "pm":"am"
    hours = (hours % 12) || 12
    return `${hours} : ${minutes} : ${seconds} ${am_or_pm}`
}
console.log(formatTime(date))

/*
console.time()-> starts a timer you can use to track how long an operation takes
Give each timer a unique name
*/
console.time("Response time")
for(let i = 0; i < 10000; i++){
    console.log(i)
}
console.timeEnd("Response time")