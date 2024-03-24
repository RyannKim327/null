function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Call the function with your desired number
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
