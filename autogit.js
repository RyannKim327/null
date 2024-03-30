function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function largestPrimeFactor(num) {
    let largestPrime = 1;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            if (isPrime(i)) {
                largestPrime = i;
            }

            const factor = num / i;
            if (isPrime(factor) && factor > largestPrime) {
                largestPrime = factor;
            }
        }
    }

    return largestPrime;
}

// Test the function with a number
const number = 360;
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
