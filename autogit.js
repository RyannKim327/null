function largestPrimeFactor(number) {
    let maxPrime = -1;

    // Divide by 2 until the number becomes odd
    while (number % 2 === 0) {
        maxPrime = 2;
        number = number / 2;
    }

    // Find the largest prime factor
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            maxPrime = i;
            number = number / i;
        }
    }

    // If the number itself is prime
    if (number > 2) {
        maxPrime = number;
    }

    return maxPrime;
}

const number = 600851475143;
const largestPrime = largestPrimeFactor(number);

console.log("Largest Prime Factor of", number, "is", largestPrime);
