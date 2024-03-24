function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Usage example
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
