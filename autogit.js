function isPrime(number) {
  // Handle special cases
  if (number <= 1) {
    return false;
  }
  
  // Check if number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
