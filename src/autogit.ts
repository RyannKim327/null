function factorial(n: number): number {
    // Input validation
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Factorial is only defined for integers.");
    }

    // Base case
    if (n === 0) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}
try {
    console.log(factorial(5)); // Output: 120
    console.log(factorial(0)); // Output: 1
    console.log(factorial(10)); // Output: 3628800
    console.log(factorial(-1)); // Throws Error
} catch (error) {
    console.error(error.message);
}
function factorialBig(n: bigint): bigint {
    if (n < 0n) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0n) {
        return 1n;
    }
    return n * factorialBig(n - 1n);
}

// Example Usage
console.log(factorialBig(20n).toString()); // Output: "2432902008176640000"
console.log(factorialBig(50n).toString()); // A very large number
// Standard number-based factorial
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Factorial is only defined for integers.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// BigInt-based factorial for large numbers
function factorialBig(n: bigint): bigint {
    if (n < 0n) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0n) {
        return 1n;
    }
    return n * factorialBig(n - 1n);
}

// Example usage
try {
    console.log("5! =", factorial(5)); // 120
    console.log("0! =", factorial(0)); // 1
    console.log("10! =", factorial(10)); // 3628800

    console.log("20! =", factorialBig(20n).toString()); // "2432902008176640000"
    console.log("50! =", factorialBig(50n).toString()); // A very large number
} catch (error) {
    console.error(error.message);
}
function factorialIterative(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (!Number.isInteger(n)) {
        throw new Error("Factorial is only defined for integers.");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorialIterative(5)); // 120
console.log(factorialIterative(0)); // 1
