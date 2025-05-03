function factorial(n: number): number {
    // Base case: factorial of 0 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
