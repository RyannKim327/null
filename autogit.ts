function isPrime(num: number): boolean {
  // Handle edge cases
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  // Eliminate even numbers greater than 2
  if (num % 2 === 0) return false;
  
  // Check for divisibility up to square root of the number
  // This optimization reduces unnecessary iterations
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}

// Example usage:
console.log(isPrime(17));  // true
console.log(isPrime(4));   // false
console.log(isPrime(2));   // true
console.log(isPrime(1));   // false
function isPrimeSieve(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  // Sieve of Eratosthenes approach for larger numbers
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}
