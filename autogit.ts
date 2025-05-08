function largestPrimeFactor(n: number): number {
  let largestFactor = -1;

  // Remove factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check odd factors from 3 up to sqrt(n)
  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2;
  }

  // If n is still > 2, then n is prime and largest
  if (n > 2) largestFactor = n;

  return largestFactor;
}

// Example
console.log(largestPrimeFactor(13195)); // Outputs 29
console.log(largestPrimeFactor(600851475143)); // Outputs 6857
