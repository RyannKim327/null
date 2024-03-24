function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function largestPrimeFactor(number) {
    let largestPrime = 0;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 && isPrime(i)) {
            largestPrime = i;
            while (number % i === 0) {
                number /= i;
            }
        }
    }

    if (number > largestPrime) {
        largestPrime = number;
    }

    return largestPrime;
}

const number = 13195;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}.`);
