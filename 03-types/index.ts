/*Write a function that greets a user given their first name. 
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything */

function greet(firstName: number | string){  //either type number OR string
    console.log("Hello " + firstName)
}

greet("vishwas");

greet(4);

//number, string, any
//we can explicitly give type "any", but avoid


//Write a function that calculates the sum of two functions

function sum(a: number, b : number){
    return a + b
}
let ans = sum(2,3);
console.log(ans);

