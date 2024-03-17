function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return num > 1;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(15)); // Output: false
