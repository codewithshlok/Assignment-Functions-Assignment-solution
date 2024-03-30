// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

(function(number) {
    const square = number * number;
    console.log("The square of", number, "is", square);
})(6); // Example number, change it to calculate the square of a different number
