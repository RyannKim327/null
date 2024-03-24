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

// Example usage
const number = 13195;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
