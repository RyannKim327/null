function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

// Usage
const number = 5;
const result = factorialRecursive(number);
console.log(`Factorial of ${number} is: ${result}`);
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Usage
const number = 5;
const result = factorialIterative(number);
console.log(`Factorial of ${number} is: ${result}`);
