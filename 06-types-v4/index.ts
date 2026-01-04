//takes greet fn as input, and then its type mentioned : () => void (greet returns void)
//greet : (a : string) => void  {greet takes a string input}
function delayedCall(greet : (a : string) => void){ 
        setTimeout( () => greet("amanjit") , 2000);
}

function greet(name : string){
    console.log(`Hello ${name}`)
}

delayedCall(greet);