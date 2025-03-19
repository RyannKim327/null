function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5; // Change this to the number for which you want to calculate the factorial
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
