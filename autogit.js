function isPrime(number) {
  if (number <= 1) {
    return false; // numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // number is divisible by `i`, hence not prime
    }
  }

  return true; // number is prime
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(37)); // Output: true
