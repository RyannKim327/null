function largestPrimeFactor(n: number): number {
    if (n <= 1) {
        throw new Error("Input must be greater than 1.");
    }

    let largestFactor = 1;

    // Step 1: Remove all factors of 2
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Step 2: Check for odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // Step 3: If n is still greater than 1, it is a prime number
    if (n > 1) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 13195;
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}.`);
