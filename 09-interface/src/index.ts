//Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User{
    firstName : string,
    lastName : string,
    age : number
}

function isLegal(user: User){ //taking the user object as an input
    if (user.age > 18){
        return true
    }else{
        return false
    }
}


let user = {
    firstName : "harun",
    lastName : "Ranjan",
    age : 21
}

isLegal(user);