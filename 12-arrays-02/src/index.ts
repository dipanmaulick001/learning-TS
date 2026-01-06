//Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User  {
    name : string,
    age : number
}

function filterUsers(users : User[]){
        return users.filter( (user) => user.age > 18 )
}

let users : User[] = [{
    name : "harkirat",
    age : 21
},{
    name : "raju",
    age : 17
}]

const ans = filterUsers(users);
console.log(ans);
