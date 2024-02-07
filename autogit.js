function largestPrimeFactor(number) {
  let factor = 2;

  while (factor <= Math.sqrt(number)) {
    if (number % factor === 0) {
      number = number / factor;
    } else {
      factor++;
    }
  }

  if (number > 1) {
    return number;
  }
}

// Example usage:
console.log(largestPrimeFactor(13195));  // Output: 29
