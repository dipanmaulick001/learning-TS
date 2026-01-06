interface User{
    name : string;
    age : number;
}

function sumOfAge( user1 : User , user2 : User): number{
    return user1.age + user2.age;
}

const ans = sumOfAge({name : "kirat",age : 20}, {name : "raju" , age : 27});
console.log(ans);