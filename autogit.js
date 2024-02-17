function factorial(n) {
    // Base case: if the number is 0, return 1
    if (n === 0) {
        return 1;
    } 
    // Recursive case: calculate factorial by calling the function recursively
    else {
        return n * factorial(n - 1);
    }
}

// Test the function with a number
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
