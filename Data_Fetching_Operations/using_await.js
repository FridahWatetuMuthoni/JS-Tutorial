// async - makes a function return a promise
// await - makes an async function wait for a promise

async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return 'file loaded'
    }
    else{
        throw 'file was not loaded'
    }
}

async function startProcess(){
    try{
        let result = await loadFile()
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

startProcess()
