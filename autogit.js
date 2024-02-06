function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any number between 2 and its square root, it is a prime number
  return true;
}

// Example usage
console.log(isPrime(7));    // Output: true
console.log(isPrime(10));   // Output: false
console.log(isPrime(23));   // Output: true
console.log(isPrime(100));  // Output: false
