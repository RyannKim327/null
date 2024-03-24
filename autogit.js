function factorial(n) {
    // Base case: if the number is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Recursive case: multiply the number by the factorial of (number - 1)
    return n * factorial(n - 1);
}

// Example usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
