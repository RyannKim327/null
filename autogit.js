function largestPrimeFactor(number) {
    let factor = 2;
    while (factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    return factor;
}

// Example usage:
const number = 84;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}.`);
