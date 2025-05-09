function largestPrimeFactor(n: number): number {
  let largestFactor = -1;

  // Divide out all 2s
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check odd factors from 3 upwards
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      largestFactor = i;
      n /= i;
    }
  }

  // If n is still > 2, it means n itself is prime
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}

// Example:
console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
