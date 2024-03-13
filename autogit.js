function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
