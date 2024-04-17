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
    let largestPrime = 2;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            let factor = number / i;
            
            if (isPrime(factor)) {
                largestPrime = factor;
                break;
            }
            
            if (isPrime(i)) {
                largestPrime = i;
            }
        }
    }

    return largestPrime;
}

// Example usage
const number = 13195;
console.log(`Largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
