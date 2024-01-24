function isPrime(number) {
  // 1 and all negative numbers are not prime
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(18)); // Output: false
