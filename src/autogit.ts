function factorial(n: number): number {
    // Input validation: Ensure n is a non-negative integer
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial is only defined for non-negative integers.");
    }

    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }

    // Recursive calculation of factorial
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
function factorialIterative(n: number): number {
    // Input validation: Ensure n is a non-negative integer
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial is only defined for non-negative integers.");
    }

    let result = 1;

    // Multiply all integers from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1
function factorialBigInt(n: number): bigint {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Factorial is only defined for non-negative integers.");
    }

    let result: bigint = 1n;

    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

// Example usage:
console.log(factorialBigInt(20)); // Output: 2432902008176640000n
