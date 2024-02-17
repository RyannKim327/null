function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(number) {
    let maxPrime = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            if (isPrime(i)) {
                maxPrime = i;
            }
            if (isPrime(number / i)) {
                maxPrime = number / i;
            }
        }
    }
    return maxPrime;
}

const number = 13195; // Your number here
const result = largestPrimeFactor(number);
console.log(result);
