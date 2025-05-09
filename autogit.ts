function largestPrimeFactor(n: number): number {
    let largestFactor = 0;

    // Divide out the factor 2
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Check for odd factors from 3 up to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // If n is still greater than 1, then n itself is a prime number
    if (n > 1) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 13195; // Replace this with any number
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}`);
