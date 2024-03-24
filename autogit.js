function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
