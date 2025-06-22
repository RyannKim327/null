function factorialIterative(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120
function factorialRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Example usage:
console.log(factorialRecursive(5)); // Output: 120
function factorialBigInt(n: number): bigint {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result: bigint = 1n;
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

// Example usage:
console.log(factorialBigInt(20).toString()); // Output: "2432902008176640000"
