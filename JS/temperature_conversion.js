const convert = document.getElementById('convert')
convert.addEventListener('click',handleConversion)


function handleConversion(e){
    e.preventDefault()
    const temperature = document.getElementById('temperature').value 
    const celcuis = document.getElementById('celcius').checked
    const fahren = document.getElementById('fahren').checked
    const result = document.getElementById('result')
    let output = ""
    console.log(`Temperature: ${temperature}, Celsuis:${celcuis}, Fahren:${fahren}`)
    if(temperature.trim()){
        if(isNaN(temperature)){
            output += "Please Enter a Valid Temperature"
        }
        else{
            if(celcuis){
                let value = toCelsius(Number(temperature))
                value = `${value}°C`
                output += value
            }
            else if(fahren){
                let value = toFahrenheit(Number(temperature))
                value = `${value}°F`
                output += value
            }
            else{
                output += "Please choose a unit to convert to"
            }
        }
    }
    result.innerHTML = `Answer: ${output}`
}
function toCelsius(temp){
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32
}