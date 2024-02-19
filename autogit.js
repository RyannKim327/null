function calculateFactorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

// Test the function with an example number
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${result}`);
