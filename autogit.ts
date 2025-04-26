function factorial(n: number): number {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage
const number = 5; // Change this to test with other numbers
console.log(`The factorial of ${number} is ${factorial(number)}`);
