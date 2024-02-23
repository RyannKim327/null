function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(num) {
  let largestPrime = 0;
  
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      let factor = num / i;
      if (isPrime(factor)) {
        largestPrime = factor;
        break;
      }
      if (isPrime(i)) {
        largestPrime = i;
      }
    }
  }
  
  return largestPrime;
}

// Example usage
const num = 13195;
console.log(largestPrimeFactor(num)); // Output: 29
