function largestPrimeFactor(number) {
    let i = 2;
    while (i <= Math.sqrt(number)) {
        if (number % i === 0) {
            number = number / i;
        } else {
            i++;
        }
    }
    return number;
}

const num = 600851475143;
const largestPrime = largestPrimeFactor(num);

console.log(`The largest prime factor of ${num} is: ${largestPrime}`);
