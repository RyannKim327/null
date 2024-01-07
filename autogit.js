function largestPrimeFactor(number) {
  let num = number;
  let largestPrime = 2;

  while (num > 1) {
    if (num % largestPrime === 0) {
      num /= largestPrime;
    } else {
      largestPrime++;
    }
  }

  return largestPrime;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29 (largest prime factor of 13195)
console.log(largestPrimeFactor(600851475143)); // Output: 6857 (largest prime factor of 600851475143)
