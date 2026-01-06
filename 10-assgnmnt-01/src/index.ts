//Create two types User and Admin
//Cfreate a function that takes either an admin or an user as ip
//returns string saying "Welcome [name]"

type User = {
    name : string,
    age : number
}

type Admin = {
    name : string,
    permissions : string
}

type UserOrAdmin = User | Admin

function greet(user : UserOrAdmin){
    console.log(`Welcome ${user.name}`)
}

//we dont have an object here yet