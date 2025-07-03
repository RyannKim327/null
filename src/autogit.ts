function isPrime(num: number): boolean {
    // Check if num is less than 2
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, hence not prime
        }
    }
    return true; // num is prime
}

// Example usage
const numberToCheck = 29;
console.log(`${numberToCheck} is prime: ${isPrime(numberToCheck)}`); // Output: true
function isPrime(num: number): boolean {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true;  // 2 is the only even prime number
    if (num % 2 === 0) return false; // other even numbers are not primes
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // num is divisible by i
    }
    return true; // num is prime
}

// Example usage
const numberToCheck = 29;
console.log(`${numberToCheck} is prime: ${isPrime(numberToCheck)}`); // Output: true
