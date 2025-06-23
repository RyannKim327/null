function factorial(n: number): number {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`); // Output: Factorial of 5 is 120
function factorial(n: number): number {
    // Check if the input is a non-negative integer
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    // Base case
    if (n === 0) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

// Example usages:
try {
    console.log(factorial(5));    // Output: 120
    console.log(factorial(0));    // Output: 1
    console.log(factorial(-3));   // Throws Error
    console.log(factorial(3.5));  // Throws Error
} catch (error) {
    console.error(error.message);
}
function factorialIterative(n: number): number {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120
