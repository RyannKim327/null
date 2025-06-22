function isPrime(num: number): boolean {
    // Step 1: Handle edge cases for numbers less than or equal to 1
    if (num <= 1) return false;

    // Step 2: Check divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number, it's not prime
        }
    }

    // Step 3: If no divisors were found, the number is prime
    return true;
}
console.log(isPrime(2));    // Output: true (2 is prime)
console.log(isPrime(4));    // Output: false (4 is not prime)
console.log(isPrime(17));   // Output: true (17 is prime)
console.log(isPrime(1));    // Output: false (1 is not prime)
console.log(isPrime(-5));   // Output: false (negative numbers are not prime)
console.log(isPrime(29));   // Output: true (29 is prime)
function isPrimeOptimized(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}
