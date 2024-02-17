function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Calculating the factorial of 5
console.log(factorial(5)); // Output: 120
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculating the factorial of 5
console.log(factorial(5)); // Output: 120
