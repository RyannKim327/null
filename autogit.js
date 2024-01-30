function isPrime(number) {
  if(number <= 1) {
    return false;
  }
  
  for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) {
      return false;
    }
  }
  
  return true;
}
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false
console.log(isPrime(1));  // Output: false
