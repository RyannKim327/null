function largestPrimeFactor(n: number): number {
    let maxPrime = -1;

    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        maxPrime = 2;
        n /= 2;
    }

    // n must be odd at this point so a skip of 2 (i.e., check only odd numbers) can be used
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            maxPrime = i;
            n /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (n > 2) {
        maxPrime = n;
    }

    return maxPrime;
}

// Example usage
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
