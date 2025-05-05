function isPrime(num: number): boolean {
    // Handle special cases
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is prime
    if (num % 2 === 0) return false; // Exclude even numbers greater than 2

    // Check for factors from 3 to sqrt(num)
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false; // Found a factor, not prime
        }
    }

    return true; // No factors found, is prime
}

// Example usage:
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
console.log(isPrime(23)); // true
console.log(isPrime(1));  // false
