function largestPrimeFactor(n: number): number {
  let largestFactor = 1;

  // Divide out all factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check for odd factors starting from 3
  let factor = 3;
  const maxFactor = Math.sqrt(n);
  while (factor <= maxFactor && n > 1) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2;
  }

  // If n > 1, then n is a prime factor itself
  if (n > 1) {
    largestFactor = n;
  }

  return largestFactor;
}
const num = 13195;
console.log(largestPrimeFactor(num)); // Outputs: 29
