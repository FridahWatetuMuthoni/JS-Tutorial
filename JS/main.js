const para1 = document.getElementById("p1")
para1.innerHTML="We are using javascript to change this text content"
let name = "fridah"
const para2 = document.getElementById('p2')
para2.innerHTML=`My name is ${name}`


const submit_btn = document.getElementById('submit-btn')
submit_btn.addEventListener("click",get_username);
function get_username(e){
    e.preventDefault();
    let username = document.getElementById('username').value
    if(username){
        console.log(username)
    }
}

//CALCULATING THE HYPOTENUSE OF A TRIANGLE

const btn = document.getElementById('submit')
btn.addEventListener("click", calculate_hypotenuse)
function calculate_hypotenuse(e){
    e.preventDefault()
    const height = document.getElementById('height').value
    const base = document.getElementById('base').value
    const hypotenuse = document.getElementById('hypo')
    if(height && base){
        if(isNaN(height) && isNaN(base))
        {
            hypotenuse.innerText='Enter valid numbers'
        }
        else{
            let hypo = Math.sqrt(Math.pow(Number(base),2) + Math.pow(Number(height), 2))
            hypotenuse.innerText=hypo
        }
    }
    else{
        hypotenuse.innerText='You cant submit an empty form'
    }
}
