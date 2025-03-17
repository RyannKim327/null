function factorial(n: number): number {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`); // Output: Factorial of 5 is 120
