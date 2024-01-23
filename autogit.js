function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If none of the divisions resulted in a remainder of 0, the number is prime
  return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true
console.log(isPrime(21)); // Output: false
