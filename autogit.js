function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// To calculate the factorial of a number, call the function with the number as an argument
const number = 5;
const result = factorial(number);

console.log(`The factorial of ${number} is ${result}`);
