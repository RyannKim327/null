function factorialRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorialRecursive(n - 1); // Recursive case
}

console.log(factorialRecursive(5)); // Output: 120
function factorialIterative(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply result by i
    }
    return result;
}

console.log(factorialIterative(5)); // Output: 120
