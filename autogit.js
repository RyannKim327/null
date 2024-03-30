function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function largestPrimeFactor(number) {
    let maxPrime = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0 && isPrime(i)) {
            maxPrime = i;
        }
    }
    return maxPrime;
}

const number = 13195; // Change this to your desired number
const result = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is: ${result}`);
