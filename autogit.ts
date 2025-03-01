function largestPrimeFactor(n: number): number {
    // Step 1: Remove all factors of 2
    while (n % 2 === 0) {
        n /= 2;
    }

    // Step 2: Check for odd factors from 3 to sqrt(n)
    let largestFactor = 1;
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // If n is still greater than 2, then it must be prime
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 13195;
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}`);
