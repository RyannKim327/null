function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any smaller number, it is prime
  return true;
}

// Example usage
console.log(isPrime(17)); // Output: true
console.log(isPrime(20)); // Output: false
