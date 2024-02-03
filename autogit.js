function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  let n = number;
  let factor = 2;

  while (factor <= n) {
    if (n % factor === 0) {
      n /= factor;
    } else {
      factor++;
    }
  }

  return factor;
}

// Example usage
const number = 150;
const largestFactor = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is: ${largestFactor}`);
