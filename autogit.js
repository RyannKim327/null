function factorial(n) {
    if (n === 0) { // base case
        return 1;
    } else {
        return n * factorial(n - 1); // recursive case
    }
}

// Example usage
let number = 5;
let result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
