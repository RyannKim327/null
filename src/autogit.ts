function isPrime(num: number): boolean {
    // Step 1: Handle edge cases
    if (num <= 1) return false; // Numbers <= 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude other even numbers

    // Step 2: Check divisors from 3 to √num
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }

    // Step 3: If no divisors found, it's prime
    return true;
}

// Example usage
console.log(isPrime(2));  // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(18)); // Output: false
const testNumbers = [1, 2, 3, 4, 5, 16, 17, 19, 20, 23, 24, 29, 97];
testNumbers.forEach(num => {
    console.log(`Is ${num} prime?`, isPrime(num));
});
Is 1 prime? false
Is 2 prime? true
Is 3 prime? true
Is 4 prime? false
Is 5 prime? true
Is 16 prime? false
Is 17 prime? true
Is 19 prime? true
Is 20 prime? false
Is 23 prime? true
Is 24 prime? false
Is 29 prime? true
Is 97 prime? true
