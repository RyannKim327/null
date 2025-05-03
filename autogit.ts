function largestPrimeFactor(num: number): number {
    let largestFactor = -1;

    // Divide out the factor 2 as long as it divides num
    while (num % 2 === 0) {
        largestFactor = 2;
        num /= 2;
    }

    // Check for odd factors from 3 upwards
    let factor = 3;
    while (factor * factor <= num) {
        while (num % factor === 0) {
            largestFactor = factor;
            num /= factor;
        }
        factor += 2; // Only odd numbers
    }

    // If num is still > 2, then it is prime itself and largest
    if (num > 2) {
        largestFactor = num;
    }

    return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
