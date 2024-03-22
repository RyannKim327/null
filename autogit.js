function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the function with an example
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
