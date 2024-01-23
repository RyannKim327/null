function largestPrimeFactor(number) {
  let largestFactor = 1;

  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    while (number % factor === 0) {
      largestFactor = Math.max(largestFactor, factor);
      number /= factor;
    }
  }

  if (number > 1) {
    largestFactor = Math.max(largestFactor, number);
  }

  return largestFactor;
}
console.log(largestPrimeFactor(123456789));  // Output: 3803
