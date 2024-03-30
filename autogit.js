function largestPrimeFactor(number) {
    let largestPrime = 1;

    // Start checking from 2 (the smallest prime number)
    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            largestPrime = i;
            number = number / i;
        }
    }

    // The remaining number after factorization is also a prime factor
    if (number > largestPrime) {
        largestPrime = number;
    }

    return largestPrime;
}

// Example usage
const number = 56;
const result = largestPrimeFactor(number);
console.log("The largest prime factor of", number, "is", result);
