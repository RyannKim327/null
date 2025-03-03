function factorial(n: number): number {
    // Base case: 0! = 1 and 1! = 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage:
const num = 5;
console.log(`The factorial of ${num} is ${factorial(num)}`); // Output: The factorial of 5 is 120
