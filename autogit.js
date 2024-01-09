function isPrime(num) {
  // Check if the number is less than 2
  if (num < 2) {
    return false;
  }

  // Check if the number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // The number is only divisible by 1 and itself, so it is prime
  return true;
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(23)); // true
