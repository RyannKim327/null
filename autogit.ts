function largestPrimeFactor(n: number): number {
  let largestFactor = -1;

  // Remove all factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check odd factors from 3 upwards
  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2;
  }

  // If n is still > 2, it is prime and largest factor
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Outputs: 29
console.log(largestPrimeFactor(600851475143)); // For big input, largest prime factor
