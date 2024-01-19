function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Number is divisible by i, hence not prime
    }
  }

  return true; // Number is prime
}

// Example usage
console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
console.log(isPrime(29)); // true
