function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Calculate the factorial of a number, for example, 5
let number = 5;
let result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
