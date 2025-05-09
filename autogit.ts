function largestPrimeFactor(n: number): number {
    let largestFactor = -1;

    // Check for the number of 2s that divide n
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Now check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // If n is still greater than 2, then n is prime
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 600851475143;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
