function largestPrimeFactor(n: number): number {
  let maxFactor = 1;
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      maxFactor = i;
      while (n % i === 0) {
        n /= i;
      }
    }
    i++;
  }
  if (n > 1) {
    maxFactor = n;
  }
  return maxFactor;
}
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
