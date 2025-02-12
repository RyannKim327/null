function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0) {
        return 1; // Base case: 0! is 1
    }
    return n * factorial(n - 1); // Recursive case
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`); // Output: The factorial of 5 is 120
