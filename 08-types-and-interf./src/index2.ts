//here we use types 
type UserType = {
    firstName : string,
    lastName : string,
    age : number,

} //this is type

function abcd(user : UserType){
    console.log(`Hello you are  ${user.age} years old`)
}

let user : UserType= {
    firstName : "john",
    lastName : "singh",
    age : 23
}