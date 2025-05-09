function isPrime(num: number): boolean {
    // Check for edge cases
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    // Check for even numbers and multiples of 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Use 6k ± 1 rule to check for factors
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(17));  // true
console.log(isPrime(1));   // false
