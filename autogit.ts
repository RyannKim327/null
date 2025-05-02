function isPrime(num: number): boolean {
    // Check if the number is less than 2 (0 and 1 are not prime)
    if (num <= 1) {
        return false;
    }

    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }

    return true; // It is a prime number
}

// Example usage:
console.log(isPrime(2));  // true
console.log(isPrime(5));  // true
console.log(isPrime(10)); // false
console.log(isPrime(13)); // true
console.log(isPrime(1));  // false
console.log(isPrime(0));  // false
console.log(isPrime(-3)); // false
