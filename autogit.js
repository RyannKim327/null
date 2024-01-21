function largestPrimeFactor(number) {
  let largestPrime = 1;

  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0 && isPrime(i)) {
      largestPrime = i;
      while (number % i === 0) {
        number /= i;
      }
    }
  }

  if (number > 1) {
    largestPrime = number;
  }

  return largestPrime;
}

// Example usage:
console.log(largestPrimeFactor(84)); // Output: 7
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
