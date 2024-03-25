function factorial(n) {
    // Base case: If the number is 0, return 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: Call the factorial function with n-1 and multiply with n
    return n * factorial(n - 1);
}

// Testing the factorial function with a number
const num = 5;
console.log(`The factorial of ${num} is: ${factorial(num)}`);
