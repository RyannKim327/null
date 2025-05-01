function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Outputs 120
function factorialIterative(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5)); // Outputs 120
