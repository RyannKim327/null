function isPrime(number) {
  // Handle special cases
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any integer from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Number is divisible, hence not prime
    }
  }

  return true; // Number is prime
}

// Usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
