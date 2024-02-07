function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any other number, it is not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If no factors are found, the number is prime
  return true;
}

// Test the function
console.log(isPrime(7));     // Output: true
console.log(isPrime(10));    // Output: false
console.log(isPrime(17));    // Output: true
console.log(isPrime(20));    // Output: false
