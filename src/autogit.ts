function isPrime(num: number): boolean {
    // A prime number must be greater than 1
    if (num <= 1) return false;

    // Check divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    return true; // No divisors found, so it's prime
}

// Example usage:
console.log(isPrime(2));  // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(1));  // Output: false
console.log(isPrime(2));    // true (smallest prime)
console.log(isPrime(3));    // true
console.log(isPrime(4));    // false (divisible by 2)
console.log(isPrime(17));   // true
console.log(isPrime(18));   // false (divisible by 2 and 3)
console.log(isPrime(19));   // true
console.log(isPrime(1));    // false (not prime)
console.log(isPrime(-7));   // false (negative numbers are not prime)
