/**
 * Calculates the factorial of a non-negative integer using recursion.
 * 
 * @param n - A non-negative integer whose factorial is to be computed.
 * @returns The factorial of the given number.
 * @throws Will throw an error if the input is negative.
 */
function factorial(n: number): number {
    // Input validation: Ensure that the input is a non-negative integer
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    // Base case: factorial(0) = 1 and factorial(1) = 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

// Example usage:
try {
    const num = 5;
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}.`);
    // Output: The factorial of 5 is 120.
} catch (error) {
    console.error(error.message);
}
/**
 * Calculates the factorial of a non-negative integer using recursion with BigInt.
 * 
 * @param n - A non-negative integer whose factorial is to be computed.
 * @returns The factorial of the given number as a BigInt.
 * @throws Will throw an error if the input is negative.
 */
function factorialBigInt(n: number): bigint {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    if (n === 0 || n === 1) {
        return 1n; // Use 'n' suffix to denote BigInt literals
    }

    return BigInt(n) * factorialBigInt(n - 1);
}

// Example usage:
try {
    const num = 20;
    const result = factorialBigInt(num);
    console.log(`The factorial of ${num} is ${result.toString()}.`);
    // Output: The factorial of 20 is 2432902008176640000.
} catch (error) {
    console.error(error.message);
}
/**
 * Calculates the factorial of a non-negative integer iteratively.
 * 
 * @param n - A non-negative integer whose factorial is to be computed.
 * @returns The factorial of the given number.
 * @throws Will throw an error if the input is negative.
 */
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
try {
    const num = 5;
    const result = factorialIterative(num);
    console.log(`The factorial of ${num} is ${result}.`);
    // Output: The factorial of 5 is 120.
} catch (error) {
    console.error(error.message);
}
