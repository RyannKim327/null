function factorialRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    return n === 0 ? 1 : n * factorialRecursive(n - 1);
}

// Example usage:
const result = factorialRecursive(5); // 120
console.log(result);
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
const result = factorialIterative(5); // 120
console.log(result);
