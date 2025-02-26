function factorial(n: number): number {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);
