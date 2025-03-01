function largestPrimeFactor(n: number): number {
    let largestPrime = -1;

    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        largestPrime = 2;
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n /= i;
        }
    }

    // If n is still greater than 2, then n itself is prime
    if (n > 2) {
        largestPrime = n;
    }

    return largestPrime;
}

// Example usage:
const number = 13195;
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
