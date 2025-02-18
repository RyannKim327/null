function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 and 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
}

// Example usage:
console.log(factorial(5)); // Output: 120
