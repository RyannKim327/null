function isPrime(num) {
  // Check if input is less than 2
  if (num < 2) {
    return false;
  }
  
  // Loop from 2 to the square root of the input number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any smaller number, it is not prime
    if (num % i === 0) {
      return false;
    }
  }
  
  // If the number is not divisible by any smaller number, it is prime
  return true;
}

// Example usage
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false
