function largestPrimeFactor(number) {
    if (number <= 1) {
        return null;
    }

    let largestFactor = 1;

    // Find and remove all divisors of 2
    while (number % 2 === 0) {
        largestFactor = 2;
        number /= 2;
    }

    // Find and remove all other prime factors
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestFactor = i;
            number /= i;
        }
    }

    // If the remaining number is a prime greater than 2
    if (number > 2) {
        largestFactor = number;
    }

    return largestFactor;
}

// Test the function with a number
const number = 13195;
console.log(largestPrimeFactor(number)); // Output: 29
