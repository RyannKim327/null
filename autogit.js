function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check if num is divisible by any number from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // None of the numbers divided evenly, so num is prime
  return true;
}
console.log(isPrime(13)); // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(1)); // Output: false
