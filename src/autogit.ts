function isPrime(num: number): boolean {
    // Step 1: Handle edge cases
    if (num <= 1) return false; // Numbers <= 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude other even numbers

    // Step 2: Check divisors from 3 to sqrt(num)
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) { // Skip even numbers
        if (num % i === 0) {
            return false; // Found a divisor, not prime
        }
    }

    // Step 3: No divisors found, number is prime
    return true;
}

// Example Usage:
console.log(isPrime(2));  // true
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(1));  // false
