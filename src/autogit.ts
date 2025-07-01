function largestPrimeFactor(n: number): number {
    if (n < 2) {
        throw new Error("Input must be greater than or equal to 2.");
    }

    let largestFactor = 0;

    // Step 1: Divide out all factors of 2
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Step 2: Check odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // Step 3: If n is still greater than 2, it must be a prime number
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 13195;
console.log(`The largest prime factor of ${number} is:`, largestPrimeFactor(number));
