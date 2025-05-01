function largestPrimeFactor(n: number): number {
    let largestFactor = -1;

    // Divide out the factor 2 as many times as possible
    while (n % 2 === 0) {
        largestFactor = 2;
        n = n / 2;
    }

    // Now n must be odd, so we can check odd factors only
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n = n / i;
        }
    }

    // If n > 2 then n itself is a prime number and largest factor
    if (n > 2) largestFactor = n;

    return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
