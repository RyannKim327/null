function isPrime(num) {
  // Check if the number is less than 2
  if (num < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any i, it is not prime
    if (num % i === 0) {
      return false;
    }
  }

  // The number is prime if it passes the previous checks
  return true;
}

// Usage
console.log(isPrime(5));  // output: true
console.log(isPrime(10)); // output: false
console.log(isPrime(17)); // output: true
