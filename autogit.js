function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`);
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`);
