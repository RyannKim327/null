function largestPrimeFactor(n: number): number {
    // Variable to store the largest prime factor
    let largestFactor = -1;

    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // n must be odd at this point, check odd factors from 3 onwards
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // While i divides n, update n and largestFactor
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage
const number = 13195; // You can change this number to test with different inputs
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}.`);
