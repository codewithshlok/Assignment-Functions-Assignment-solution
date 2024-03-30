// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax() {
    // Define tax rates and income ranges using closure
    const taxRates = [
        { minIncome: 0, maxIncome: 10000, rate: 0.1 },
        { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
        { minIncome: 50001, maxIncome: Infinity, rate: 0.3 }
    ];

    // Return a function that calculates tax based on income
    return function(income) {
        let tax = 0;
        for (const bracket of taxRates) {
            if (income > bracket.minIncome) {
                tax += (Math.min(income, bracket.maxIncome) - bracket.minIncome) * bracket.rate;
            }
        }
        return tax;
    };
}

// Example usage
const income1 = 8000;
const income2 = 30000;
const income3 = 70000;

const calculateTaxForIncome = calculateTax();

console.log("Tax for income $", income1, ": $", calculateTaxForIncome(income1));
console.log("Tax for income $", income2, ": $", calculateTaxForIncome(income2));
console.log("Tax for income $", income3, ": $", calculateTaxForIncome(income3));
