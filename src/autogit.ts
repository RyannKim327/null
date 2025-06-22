function isPrime(num: number): boolean {
    // Step 1: Handle edge cases
    if (num <= 1) return false; // Numbers <= 1 are not prime
    if (num === 2 || num === 3) return true; // 2 and 3 are prime
    if (num % 2 === 0) return false; // Eliminate even numbers

    // Step 2: Check divisors from 3 to √num
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false; // Found a divisor, so not prime
        }
    }

    // Step 3: No divisors found, so it's prime
    return true;
}

// Example usage
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(19)); // true
