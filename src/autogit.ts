function largestPrimeFactor(n: number): number {
    let largestFactor = 0;

    // Divide out all factors of 2
    while (n % 2 === 0) {
        largestFactor = 2;
        n = n / 2;
    }

    // Check odd factors from 3 onwards
    let factor = 3;
    while (factor * factor <= n) {
        while (n % factor === 0) {
            largestFactor = factor;
            n = n / factor;
        }
        factor += 2; // Increment by 2 to check only odd numbers
    }

    // If n is still greater than 2, it must be a prime number
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage
const number = 600851475143;
console.log(`The largest prime factor of ${number} is:`, largestPrimeFactor(number));
The largest prime factor of 600851475143 is: 6857
