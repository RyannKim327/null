function largestPrimeFactor(number) {
  let factor = 2;
  while (factor <= Math.sqrt(number)) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }
  return number;
}

// Example usage
console.log(largestPrimeFactor(13195)); // Output: 29
