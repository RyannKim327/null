function largestPrimeFactor(number) {
    let largestPrime = 2;

    while (number > largestPrime) {
        if (number % largestPrime === 0) {
            number /= largestPrime;
        } else {
            largestPrime++;
        }
    }

    return largestPrime;
}

// Example usage
const number = 13195; // Change this number to find the largest prime factor of a different number
const result = largestPrimeFactor(number);
console.log(result);
