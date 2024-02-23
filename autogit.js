function largestPrimeFactor(number) {
    let largestFactor = 1;

    // Divide the number by 2 repeatedly to extract out all the factors of 2
    while (number % 2 === 0) {
        largestFactor = 2;
        number = number / 2;
    }

    // Check for odd factors starting from 3
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            largestFactor = i;
            number = number / i;
        }
    }

    // If the remaining number is a prime number greater than 2
    if (number > 2) {
        largestFactor = number;
    }

    return largestFactor;
}

// Example usage
const number = 84;
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
