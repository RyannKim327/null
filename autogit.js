function isPrime(number) {
  // 1 and numbers less than 1 are not prime
  if (number <= 1) {
    return false;
  }
  
  // Check for divisibility of the number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  // If the number is not divisible by any other number, it is prime
  return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true
console.log(isPrime(20)); // Output: false
