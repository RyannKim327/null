function getLargestPrimeFactor(n: number): number {
    let maxPrimeFactor = -1;

    // Handle the factor 2 separately to allow the main loop to only check odd numbers
    while (n % 2 === 0) {
        maxPrimeFactor = 2;
        n /= 2;
    }

    // Check for odd factors from 3 onwards up to sqrt(n)
    let factor = 3;
    while (factor * factor <= n) {
        while (n % 3 === 0) {
            maxPrimeFactor = 3;
            n /= 3;
        }
        factor += 2; // only odd numbers
        while (n % factor === 0) {
            maxPrimeFactor = factor;
            n /= factor;
        }
        factor += 2;
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        maxPrimeFactor = n;
    }

    return maxPrimeFactor;
}

// Example usage:
const number = 13195;
console.log(`Largest prime factor of ${number} is ${getLargestPrimeFactor(number)}`);
// Output: Largest prime factor of 13195 is 29
