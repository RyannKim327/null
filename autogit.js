function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check for prime by dividing the number by all integers from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Usage example:
console.log(isPrime(17)); // Output: true
console.log(isPrime(25)); // Output: false
