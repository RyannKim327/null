function isPrime(num: number): boolean {
    // Handle edge cases
    if (num <= 1) return false; // Numbers <= 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude other even numbers

    // Check divisors from 3 to sqrt(num)
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    return true; // No divisors found, so it's prime
}

// Example usage:
console.log(isPrime(2));  // true
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(19)); // true
console.log(isPrime(1));  // false
