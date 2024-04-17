function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: return n times the factorial of (n-1)
        return n * factorial(n - 1);
    }
}

// Call the factorial function with the number for which you want to calculate the factorial
const n = 5;
const result = factorial(n);
console.log(`The factorial of ${n} is: ${result}`);
