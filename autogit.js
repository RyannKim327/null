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

const number = 600851475143;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
