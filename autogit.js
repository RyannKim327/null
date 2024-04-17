function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function largestPrimeFactor(number) {
    let largestPrime = 0;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (isPrime(i)) {
                largestPrime = i;
            }
            if (isPrime(number / i)) {
                largestPrime = Math.max(largestPrime, number / i);
            }
        }
    }
    return largestPrime;
}

const number = 13195; // Change this to the number you want to find the largest prime factor of
console.log(largestPrimeFactor(number));
