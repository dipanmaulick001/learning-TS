//interface
interface User{
    firstName : string,
    lastName : string,
    age : number
}

let user : User = {
    firstName : "jerry",
    lastName : "kumar",
    age : 22
}

function defg(user : User){
    console.log(`Hello ${user.firstName}`)
}

defg(user);