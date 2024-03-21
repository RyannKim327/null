function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

// Calculate the factorial of a number
const number = 5; // Change this to any number you want to calculate the factorial for
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
