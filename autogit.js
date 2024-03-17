function largestPrimeFactor(number) {
    let largestPrime = 1;
    let i = 2;

    while (i <= number) {
        if (number % i === 0) {
            number /= i;
            if (i > largestPrime) {
                largestPrime = i;
            }
        } else {
            i++;
        }
    }

    return largestPrime;
}

const number = 1234567890; // Change this to the number you want to find the largest prime factor of
const result = largestPrimeFactor(number);
console.log(`Largest prime factor of ${number} is: ${result}`);
