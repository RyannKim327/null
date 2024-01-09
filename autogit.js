function largestPrimeFactor(number) {
    let largestFactor = 1;

    // Check if the number is divisible by 2
    while (number % 2 === 0) {
        largestFactor = 2;
        number /= 2;
    }

    // Check for odd prime factors starting from 3
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            largestFactor = i;
            number /= i;
        }
    }

    // If the remaining number is greater than 2, it is also a prime factor
    if (number > 2) {
        largestFactor = number;
    }

    return largestFactor;
}

const number = 123456789;
const largestFactor = largestPrimeFactor(number);
console.log("Largest prime factor of", number, "is", largestFactor);
