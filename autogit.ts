function isPrime(num: number): boolean {
    // Check if the number is less than 2
    if (num < 2) {
        return false;
    }
    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }
    return true; // num is prime
}

// Example usage:
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false
console.log(isPrime(17)); // true
