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
    let largestPrime = 0;
    
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            let factor1 = i;
            let factor2 = num / i;
            
            if (isPrime(factor1) && factor1 > largestPrime) {
                largestPrime = factor1;
            }
            
            if (isPrime(factor2) && factor2 > largestPrime) {
                largestPrime = factor2;
            }
        }
    }
    
    return largestPrime;
}

const number = 13195; // Enter your number here
console.log(largestPrimeFactor(number)); // Output the largest prime factor
