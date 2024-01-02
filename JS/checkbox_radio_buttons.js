const subscribe_btn = document.getElementById("subscribe_btn")
subscribe_btn.addEventListener('click',handleSubcribe)
function handleSubcribe(e){
    e.preventDefault()
    const subscribe = document.getElementById('subscribe').checked
    if(subscribe){
        console.log("You are Subscribed Already")
    }
    else{
        console.log("Please Subcribe")
    }
}

const payment_btn = document.getElementById("payment_btn")
payment_btn.addEventListener('click', handlePayment)
function handlePayment(e){
    e.preventDefault()
    const paypal = document.getElementById("paypal").checked
    const visa = document.getElementById("visa").checked
    const mastercard = document.getElementById("mastercard").checked

    if(visa && paypal && mastercard){
        console.log("You are using all the payment methods")
    }
    else if(visa){
        console.log("You are paying using visa")
    }
    else if(paypal){
        console.log("You are paying with paypal")
    }
    else if(mastercard){
        console.log("you are paying wit mastercard")
    }
    else{
        console.log("You have not choosen a payment method")
    }
}