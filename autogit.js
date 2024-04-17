function largestPrimeFactor(number) {
    let i = 2;
    while (i <= number) {
        if (number % i === 0) {
            number /= i;
        } else {
            i++;
        }
    }
    return i;
}

const number = 600851475143; // The number you want to find the largest prime factor of
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestFactor}`);
