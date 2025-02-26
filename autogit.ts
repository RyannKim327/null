function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function largestPrimeFactor(n: number): number {
    let largest = -1; // Initialize to -1 (or 0, depending on your needs)

    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        largest = 2;
        n /= 2;
    }

    // n must be odd at this point
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            largest = i;
            n /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (n > 2) {
        largest = n;
    }

    return largest;
}

// Example usage
const number = 13195; // Replace with any number
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}`);
