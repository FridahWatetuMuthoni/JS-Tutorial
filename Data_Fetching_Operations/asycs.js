// async - makes a function return a promise

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return 'file loaded'
    }
    else{
        throw 'file was not loaded'
    }
}

loadFile().then((value)=>{
    console.log(value)
})
.catch(error=>{
    console.log(error)
})