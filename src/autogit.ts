function factorial(n: number): number {
    // Base case: if n is 0, return 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Example usage
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`); // Output: Factorial of 5 is 120
if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
}
function factorial(n: number): number {
    // Check for negative input
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    // Base case: if n is 0, return 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Example usage
try {
    const num = 5;
    console.log(`Factorial of ${num} is ${factorial(num)}`); // Output: Factorial of 5 is 120
} catch (error) {
    console.error(error);
}
