function factorial(n: number): number {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
