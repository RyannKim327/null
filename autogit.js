function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// To calculate the factorial of a number, call the function with the number as an argument
let number = 5;
let result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
