function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Usage example:
console.log(isPrime(7)); // Output: true
console.log(isPrime(16)); // Output: false
