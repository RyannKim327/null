function largestPrimeFactor(n: number): number {
    let largestFactor = 1;

    // Check for number of 2s that divide n
    while (n % 2 === 0) {
        largestFactor = 2;
        n /= 2;
    }

    // n must be odd at this point, start checking for odd factors
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
const number = 13195; // Change this to the number you want to factor
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor(number)}`);
