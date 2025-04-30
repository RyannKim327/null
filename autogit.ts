function factorial(n: number): number {
    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`); // Output: 120
