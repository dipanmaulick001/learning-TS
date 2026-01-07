//the idea of readonly : to prevent internals from being modified

type User = {
    name : string,
    email : string,
    age : number,
    id : number
}

let user : Readonly<User> = {
    name : "deep",
    email : "deep@gmail.com",
    age : 25,
    id : 61200017965
}

//user.age = 18 //cannot because it is readonly 