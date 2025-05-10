function largestPrimeFactor(n: number): number {
    let largestFactor = -1;

    // Dividing by 2 until n is odd
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // If n is still greater than 2, then n itself is a prime number
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}

// Example usage:
const number = 13195; // Change this to the number you want to check
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
