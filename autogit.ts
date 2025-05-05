function isPrime(num: number): boolean {
    // Check for numbers less than 2
    if (num <= 1) {
        return false;
    }
    
    // Check for divisibility from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // not prime
        }
    }
    
    return true; // is prime
}

// Example usage
console.log(isPrime(2));  // true
console.log(isPrime(3));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(19)); // true
