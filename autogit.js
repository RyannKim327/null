function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

function largestPrimeFactor(num) {
  let maxPrime = 1;
  
  while (num % 2 === 0) {
    maxPrime = 2;
    num = num / 2;
  }
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      if (isPrime(i)) {
        maxPrime = i;
      }
      num = num / i;
    }
  }
  
  if (num > 2 && isPrime(num)) {
    maxPrime = num;
  }
  
  return maxPrime;
}

// Example usage
const number = 84;
const largestPrime = largestPrimeFactor(number);
console.log(`The largest prime factor of ${number} is: ${largestPrime}`);
