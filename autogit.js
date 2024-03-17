function calculateFactorial(number) {
    // Base case: if the number is 0, return 1
    if (number === 0) {
        return 1;
    } else {
        // Recursive case: calculate factorial by multiplying the number with the factorial of (number - 1)
        return number * calculateFactorial(number - 1);
    }
}

// Calculate the factorial of a number (e.g., 5)
const number = 5;
const factorial = calculateFactorial(number);
console.log(`Factorial of ${number} is: ${factorial}`);
