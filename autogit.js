function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const num = 5;
const factorial = factorialIterative(num);
console.log(`Factorial of ${num} is: ${factorial}`);
function factorialRecursive(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialRecursive(num - 1);
}

// Example usage
const num = 5;
const factorial = factorialRecursive(num);
console.log(`Factorial of ${num} is: ${factorial}`);
