function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function largestPrimeFactor(number) {
    let factor = 2;
    let largestPrime = 0;

    while (number > 1) {
        if (number % factor === 0) {
            number /= factor;
            if (isPrime(factor)) {
                largestPrime = factor;
            }
        } else {
            factor++;
        }
    }

    return largestPrime;
}

const number = 13195; // Input number
const result = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is: ${result}`);
