function isPrime(number) {
  // Check if number is less than 2
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any i, it is not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any i, it is prime
  return true;
}

// Example usage
console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
