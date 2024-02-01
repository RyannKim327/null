function isPrime(number) {
  if (number < 2) {
    // Numbers less than 2 are not prime
    return false;
  }

  // Check if the number is divisible by any number less than its square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // If it is divisible, then it is not prime
      return false;
    }
  }

  // If it is not divisible by any number, it is prime
  return true;
}

// Example usage
console.log(isPrime(7));  // Output: true
console.log(isPrime(12));  // Output: false
console.log(isPrime(37));  // Output: true
