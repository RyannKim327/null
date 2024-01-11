function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  // Check if the number is divisible by any integer from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Example usage
console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
console.log(isPrime(23)); // true
