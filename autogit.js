function largestPrimeFactor(number) {
    let i = 2;
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            number /= i;
        } else {
            i++;
        }
    }
    return number;
}

const number = 600851475143;
const largestPrimeFactorValue = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactorValue}`);
