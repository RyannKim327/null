function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculate the factorial of 5
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
