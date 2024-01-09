function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}
// Example usage
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
