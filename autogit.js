function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Example: Calculate the factorial of 5
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
