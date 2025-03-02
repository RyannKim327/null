function factorial(n: number): number {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log(`The factorial of ${num} is ${factorial(num)}`); // Output: The factorial of 5 is 120
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
