function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculate the factorial of 5
const result = factorial(5);
console.log(result); // Output: 120
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate the factorial of 5
const result = factorial(5);
console.log(result); // Output: 120
