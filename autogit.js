function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  // Check from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Test the function
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
