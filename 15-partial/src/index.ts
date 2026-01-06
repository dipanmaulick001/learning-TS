interface User{
    name : string,
    age : number,
    email : string,
    id : number,
    address : string
}

type UserProfile = Pick <User, 'name'|'age'| 'email'>

type UserProfileOptional = Partial <UserProfile>

function displayUserProfile(user : UserProfileOptional){
    console.log(`profile : ${user.name} , ${user.age}`)
}