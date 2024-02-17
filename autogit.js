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

const number = 13195; // The number for which you want to find the largest prime factor
const largestPrime = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is ${largestPrime}`);
