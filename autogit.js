function factorial(n) {
    // Base case: if the number is 0, return 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: return n * factorial(n - 1)
        return n * factorial(n - 1);
    }
}

// Call the factorial function with the number for which you want to calculate the factorial
const num = 5;
const result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);
