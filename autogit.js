function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
