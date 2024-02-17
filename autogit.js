function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursively calculate factorial
        return n * factorial(n - 1);
    }
}

// Test the function with an example number
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
