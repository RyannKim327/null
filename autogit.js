function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  let largestPrime = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0 && isPrime(i)) {
      largestPrime = i;
    }
  }
  return largestPrime === 1 ? number : largestPrime;
}

// Example usage
const number = 1234567890;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is ${largestPrime}`);
