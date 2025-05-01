function largestPrimeFactor(n: number): number {
  let largestFactor = -1;

  // Divide out all factor 2's
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Now n must be odd, start checking from 3 upwards
  let factor = 3;
  const maxFactor = Math.sqrt(n);
  while (factor <= maxFactor) {
    while (n % factor === 0) {
      largestFactor = factor;
      n /= factor;
    }
    factor += 2;
  }

  // If n is still > 2 then n itself is prime and largest factor
  if (n > 2) largestFactor = n;

  return largestFactor;
}
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
