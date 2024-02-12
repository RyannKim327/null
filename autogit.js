function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  // Check if number is divisible by any number from 2 to square root of number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Usage examples:
console.log(isPrime(5));  // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
