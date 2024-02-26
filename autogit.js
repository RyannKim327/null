function largestPrimeFactor(number) {
    let factor = 2;
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            number = number / factor;
        } else {
            factor++;
        }
    }
    return number;
}

// Test the function with a number
const number = 13195; // or any other number
const largestPrime = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is: ${largestPrime}`);
