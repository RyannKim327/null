function largestPrimeFactor(n: number): number {
    // Step 1: Divide by 2 until n is odd
    while (n % 2 === 0) {
        n /= 2;
    }
    
    // Now n must be odd, thus we can check for odd factors starting from 3
    let largestFactor = 2; // Since we handled 2 separately
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i; // Update largest prime factor
            n /= i;
        }
    }
    
    // If n becomes a prime number greater than 2
    if (n > 2) {
        largestFactor = n; // n is prime and larger than any factor we found
    }

    return largestFactor;
}

// Example usage
const number = 13195;
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}`);
