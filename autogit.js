function isPrime(number) {
  // Check if the number is less than 2, as prime numbers start from 2
  if (number < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isPrime(17));  // Returns: true
console.log(isPrime(6));   // Returns: false
