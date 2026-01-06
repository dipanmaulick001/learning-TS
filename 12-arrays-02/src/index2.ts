interface User {
    name : string,
    age : number
}

function filterLegal(users : User[]){
    let arr = []
    for (const user of users){
        if (user.age > 18){
                arr.push(user)
        }
    }

    return arr
}

let users : User[] = [{ name : "kirat" , age : 21},
    {name : "raju" , age : 16}
]

console.log(filterLegal(users))