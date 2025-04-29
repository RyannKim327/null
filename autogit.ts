function largestPrimeFactor(n: number): number {
  let number = n;
  let largestFactor = -1;

  // Divide out factors of 2 first
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  // Now number is odd; start checking odd factors from 3 upwards
  let factor = 3;
  while (factor * factor <= number) {
    while (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    }
    factor += 2;
  }

  // If number is still greater than 2, then it's prime and largest
  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}

// Example
console.log(largestPrimeFactor(13195)); // Output: 29
