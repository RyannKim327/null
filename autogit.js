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

const number = 600851475143;
const largestPrime = largestPrimeFactor(number);

console.log("The largest prime factor of", number, "is", largestPrime);
