/*
Cookie -> a small text file stored on your computer that is used
to remember information about the user in name-value pairs 
*/

//checking if you have cookies enabled
console.log(navigator.cookieEnabled)


function setCookie(name, value, daysToLive){
    const date = new Date()
    let convert_dayToLive_to_miliseconds = daysToLive * 24 * 60 * 60 * 1000
    date.setTime(date.getTime() + convert_dayToLive_to_miliseconds)
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

//creating a cookie
setCookie("email","fridah@gmal.com",21)
setCookie("username","anna", 30)
setCookie("firstName","Dean",21)
setCookie("lastName","Sam", 30)
setCookie("name","jane", 60)


//deleting a cookie
function deleteCookie(name){
    setCookie(name,null,null)
}

deleteCookie("name")


//getting a cookie
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cookie_array = cDecoded.split(";")
    console.log(cookie_array)
    let result = null
    cookie_array.forEach(element=>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}

console.log(getCookie("email"))