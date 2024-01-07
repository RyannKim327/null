function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }
  
  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by i, then it is not prime
    if (number % i === 0) {
      return false;
    }
  }
  
  // If no divisors are found, the number is prime
  return true;
}

// Example usage
console.log(isPrime(17));  // Output: true
console.log(isPrime(4));   // Output: false
