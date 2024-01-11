function isPrime(number) {
  // 1 and numbers less than 1 are not prime
  if (number <= 1) {
    return false;
  }

  // Check if number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // It's divisible by a number other than 1 and itself
    }
  }

  return true; // It's only divisible by 1 and itself
}

// Example usage
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
