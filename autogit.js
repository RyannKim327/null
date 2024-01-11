function isPrime(num) {
  // 1 and non-integer numbers are not prime
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }

  // Check if it is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Usage
console.log(isPrime(17)); // true
console.log(isPrime(15)); // false
