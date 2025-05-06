function largestPrimeFactor(n: number): number {
  let largestFactor = -1;

  // Remove all factors of 2 first
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Now n must be odd. Start checking odd factors.
  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2;
  }

  // If after this n > 2, then n itself is prime (and largest)
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}
console.log(largestPrimeFactor(13195)); // Outputs: 29
console.log(largestPrimeFactor(600851475143)); // Outputs: 6857
