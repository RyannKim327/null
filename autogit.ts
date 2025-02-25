function isPrime(num: number): boolean {
    // Check if the number is less than 2
    if (num < 2) return false;
    
    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    
    return true; // Is a prime number
}

// Example Usage
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
