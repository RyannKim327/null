function factorial(n) {
    // Base case: If the number is 0, return 1
    if (n === 0) {
        return 1;
    } 
    // Recursive case: Calculate factorial of n-1 and multiply by n
    else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
console.log(factorial(5)); // Output: 120 (5! = 5*4*3*2*1 = 120)
