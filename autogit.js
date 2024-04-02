function factorial(n) {
    // Base case
    if (n === 0) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

// Call the factorial function with the number you want to calculate the factorial of
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
