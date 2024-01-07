function isPrime(number) {
  if (number <= 1) { // Numbers less than or equal to 1 are not prime
    return false;
  }
  
  // Check if the number is divisible by any number from 2 to square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible, it's not a prime number
    }
  }
  
  return true; // If not divisible by any number, it's a prime number
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(12)); // Output: false
console.log(isPrime(1)); // Output: false
console.log(isPrime(23)); // Output: true
