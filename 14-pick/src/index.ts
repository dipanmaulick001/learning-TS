interface User {
    name : string,
    age : number,
    email : string,
    createdAt : Date
}

type UserProfile = Pick <User , 'name'|'email'|'age'>



function displayUserProfile(user : UserProfile){
    console.log(`User profile :  ${user.name} , ${user.age} , ${user.email}`)
}