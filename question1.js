// Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.

const square =(number)=>{
    return number * number
}

let num = 2;
let result  = square(num);
console.log("Square of  "+ num + " is :"+result)