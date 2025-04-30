function factorial(n: number): number {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
