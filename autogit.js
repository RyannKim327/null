function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculate the factorial of a number, for example: 5
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate the factorial of a number, for example: 5
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
