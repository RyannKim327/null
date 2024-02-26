function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function
console.log(factorial(5)); // Output: 120
