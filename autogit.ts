function factorial(n: number): number {
    // Base case: if n is 0, the factorial is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n * factorial of (n - 1)
        return n * factorial(n - 1);
    }
}

// Example usage
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);
