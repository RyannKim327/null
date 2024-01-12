function isPrime(number) {
    // Check if the number is less than 2 (not prime)
    if (number < 2) {
        return false;
    }

    // Find the square root of the number (rounded up)
    const sqrt = Math.ceil(Math.sqrt(number));

    // Check divisibility up to the square root
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false; // If divisible by any number, not prime
        }
    }

    return true; // If not divisible by any number, prime
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
console.log(isPrime(37)); // Output: true
