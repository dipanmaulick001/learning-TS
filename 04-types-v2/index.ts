function isLegal(age : number): boolean{ //we explicitly mention the return type as boolean
    if(age > 18){
            return true;
    }else{
            return false
    }
}

console.log(isLegal(19));