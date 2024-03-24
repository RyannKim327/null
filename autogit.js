function largestPrimeFactor(number) {
    let divisor = 2;
    while (number > 1) {
        if (number % divisor === 0) {
            number /= divisor;
        } else {
            divisor++;
        }
    }
    return divisor;
}

const number = 13195; // Change this to your desired number
const largestFactor = largestPrimeFactor(number);

console.log(`The largest prime factor of ${number} is ${largestFactor}`);
