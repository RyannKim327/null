function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  // If any number divides the input without leaving a remainder, it's not prime
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // If no divisors are found, the number is prime
  return true;
}

// Usage example
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
