function largestPrimeFactor(number) {
    let factor = 2;
    
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    
    return number;
}

const number = 600851475143; // Replace this with the number you want to find the largest prime factor of
const largestPrimeFactorNumber = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is: ${largestPrimeFactorNumber}`);
