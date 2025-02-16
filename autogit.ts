function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function largestPrimeFactor(n: number): number {
    let largestPrime = -1;

    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        largestPrime = 2;
        n /= 2;
    }

    // n must be odd at this point, so check for odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (n > 2) {
        largestPrime = n;
    }

    return largestPrime;
}

// Example usage
const number = 13195;
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}.`);
