function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example usage
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
