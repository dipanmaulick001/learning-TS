function delayTheCall( message : ( a : string) => void){
    setTimeout(() => message("amandeep") , 2500);
}

const message = (name : string) =>{
    console.log(` Here is a message for you ${name}`)
}

delayTheCall(message)