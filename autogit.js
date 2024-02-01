function largestPrimeFactor(num) {
  let largestFactor = 0;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      largestFactor = i;
      num /= i;
    }
  }

  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(600851475143)); // Output: 6857
