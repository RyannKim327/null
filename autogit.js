function calculateFactorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

// Example usage
const number = 5;
const factorial = calculateFactorial(number);
console.log(`Factorial of ${number} is: ${factorial}`);
