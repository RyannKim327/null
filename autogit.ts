function largestPrimeFactor(n: number): number {
    // Start with the smallest prime factor
    let largestFactor = -1;

    // Handle even numbers first
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n /= i;
        }
    }

    // If n is a prime number greater than 2
    if (n > 2) {
        largestFactor = n; 
    }

    return largestFactor;
}

// Example usage
const number = 13195;
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}.`);
