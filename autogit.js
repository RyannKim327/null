// Function to check if a number is prime
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the largest prime factor of a number
function largestPrimeFactor(number) {
    let largestPrime = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            // Check if both factors are prime
            if (isPrime(i)) {
                largestPrime = i;
            }
            let factor = number / i;
            if (isPrime(factor)) {
                largestPrime = factor;
            }
        }
    }
    return largestPrime;
}

// Test the function with a number
const number = 315;
console.log(`The largest prime factor of ${number} is: ${largestPrimeFactor(number)}`);
