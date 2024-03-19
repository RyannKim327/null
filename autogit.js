function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Test the factorial function
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
