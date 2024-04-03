function factorial(n) {
    // Base case: if the number is 0, return 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: calculate the factorial of (n-1) and multiply it by n
        return n * factorial(n - 1);
    }
}

// Call the function with the number for which you want to calculate the factorial
let number = 5;
let result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
