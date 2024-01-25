function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }
  
  // Check if num is divisible by any number up to its square root
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  // num is a prime number
  return true;
}

// Testing the function
console.log(isPrime(29));  // Output: true
console.log(isPrime(16));  // Output: false
