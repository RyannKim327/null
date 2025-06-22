function isPrime(num: number): boolean {
    // Step 1: Handle edge cases
    if (num <= 1) return false; // Numbers <= 1 are not prime
    if (num === 2) return true; // 2 is the smallest prime number
    if (num % 2 === 0) return false; // Even numbers > 2 are not prime

    // Step 2: Check divisors from 3 to √num
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) { // Skip even numbers
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    // Step 3: No divisors found, so it's prime
    return true;
}

// Example usage:
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
