function largestPrimeFactor(n: number): number {
  let number = n;
  let largestFactor = -1;

  // Divide out the 2s to handle even factors first
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  // Now check for odd factors from 3 upward
  let factor = 3;
  const maxFactor = Math.sqrt(number);

  while (factor <= maxFactor && number > 1) {
    while (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    }
    factor += 2; // Check only odd factors
  }

  // If number is still greater than 2, it is a prime number and largest factor
  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}

// Example:
console.log(largestPrimeFactor(13195)); // Output will be 29
