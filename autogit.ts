function factorial(n: number): number {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case
        return n * factorial(n - 1);
    }
}

// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
