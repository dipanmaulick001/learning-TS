import ts = require("typescript")

interface UserType {
    name : string,
    age : number,
    address : {
        city : string,
        country : string,
        pincode : number
    }
}

let userr : UserType = {
    name : "aman",
    age : 25,
    address  :{
        city : "Bangalore",
        country : "India",
        pincode : 560008

    }
}

function isLegal(userr : UserType):boolean{
    return userr.age >= 18
}

const answer = isLegal(userr);
if(answer){
    console.log("You are legal")
}else{
    console.log("illegal")
}