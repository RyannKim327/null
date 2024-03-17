function factorial(n) {
    // Base case: if n is 0, the factorial is 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: multiply n by the factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Call the factorial function with a number to calculate its factorial
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
