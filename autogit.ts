function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5; // Example number for factorial calculation
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
