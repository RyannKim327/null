function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any value in this range, it's not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If the number is not divisible by any value in the range, it's prime
  return true;
}
console.log(isPrime(7));   // Output: true
console.log(isPrime(12));  // Output: false
console.log(isPrime(97));  // Output: true
