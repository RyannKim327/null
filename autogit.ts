function largestPrimeFactor(n: number): number {
  let largestFactor = -1;
  
  // Remove factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check odd factors starting from 3
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      largestFactor = i;
      n /= i;
    }
  }

  // If n is not 1, then whatever remains is prime and larger than any factor found
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Outputs: 29
console.log(largestPrimeFactor(600851475143)); // Typically a classic large example
