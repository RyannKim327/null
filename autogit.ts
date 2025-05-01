function largestPrimeFactor(n: number): number {
    let largestFactor = -1;

    // Divide out factor 2 completely
    while (n % 2 === 0) {
        largestFactor = 2;
        n = n / 2;
    }

    // Check for odd factors from 3 up to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestFactor = i;
            n = n / i;
        }
    }

    // If n is still greater than 2, then n itself is a prime factor
    if (n > 2) {
        largestFactor = n;
    }

    return largestFactor;
}
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: the largest prime factor
