type User  = {
    name : string, 
    age : number
}

type Users = Record< string , User>

const user : Users = {
    "rsda123" : {name : "dipanjan" , age : 21},
    "kdkod23" : {name :"harmanpreet" , age : 23}
}