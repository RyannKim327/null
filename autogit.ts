function largestPrimeFactor(n: number): number {
    let number = n;
    let maxPrime = -1;

    // Check for the number of 2s that divide n
    while (number % 2 === 0) {
        maxPrime = 2;
        number /= 2;
    }

    // n must be odd at this point
    // Check for odd factors from 3 to the square root of n
    for (let i = 3; i * i <= number; i += 2) {
        while (number % i === 0) {
            maxPrime = i;
            number /= i;
        }
    }

    // This condition is to check if n is a prime number greater than 2
    if (number > 2) {
        maxPrime = number;
    }

    return maxPrime;
}

// Example usage:
const number = 13195;
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
