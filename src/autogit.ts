function factorialIterative(n: number): number {
    // Factorial is undefined for negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorialIterative(5)); // Output: 120
function factorialRecursive(n: number): number {
    // Factorial is undefined for negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case
    return n * factorialRecursive(n - 1);
}

// Example usage
console.log(factorialRecursive(5)); // Output: 120
function factorialBigInt(n: bigint): bigint {
    if (n < 0n) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorialBigInt(50n).toString()); // Output: "30414093201713378043612608166064768844377641568960512000000000000"
