// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    } else {
        
        return n * factorial(n - 1);
    }
}


console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 8:", factorial(8)); // 40320
