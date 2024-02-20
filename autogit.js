function factorial(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

// Calculate the factorial of a number
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
