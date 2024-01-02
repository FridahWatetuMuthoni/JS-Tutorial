const clock = document.getElementById('clock')

function update(){
    let date = new Date()
    clock.innerHTML = formatTime(date)

    function formatTime(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let am_or_pm = hours >= 12 ? "pm":"am"
        hours = (hours % 12) || 12

        hours = formatZeros(hours)
        minutes = formatZeros(minutes)
        seconds = formatZeros(seconds)
        
        return `${hours} : ${minutes} : ${seconds} ${am_or_pm}`
    }

    function formatZeros(time){
        time = time.toString()
        return time.length < 2 ? ("0" + time) : time
    }
}

setInterval(update, 1000)
