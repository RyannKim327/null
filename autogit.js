function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

function largestPrimeFactor(number) {
    let largest = 0;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (isPrime(i)) {
                largest = i;
            }
            if (isPrime(number / i)) {
                largest = Math.max(largest, number / i);
            }
        }
    }

    return largest;
}

const number = 13195; // Example number
const largestPrime = largestPrimeFactor(number);
console.log("The largest prime factor of", number, "is", largestPrime);
