function factorial(n: number): number {
    if (n <= 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

const num = 5; // Example number
console.log(`Factorial of ${num} is ${factorial(num)}`);
function factorial(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply the result by each number up to n
    }
    return result;
}

const num = 5; // Example number
console.log(`Factorial of ${num} is ${factorial(num)}`);
