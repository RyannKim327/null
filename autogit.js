function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(num) {
    let largestFactor = 1;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && isPrime(i)) {
            largestFactor = i;
        }
    }
    
    return largestFactor;
}

const number = 13195; // The number you want to find the largest prime factor of
const result = largestPrimeFactor(number);
console.log(result); // Output the largest prime factor
