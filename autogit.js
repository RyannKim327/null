function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Calculate factorial of a number
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate factorial of a number
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
