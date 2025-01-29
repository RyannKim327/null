function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function largestPrimeFactor(n: number): number {
  let largestFactor = 1;
  for (let i = 2; i <= n; i++) {
    while (n % i === 0 && isPrime(i)) {
      largestFactor = i;
      n /= i;
    }
  }
  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
