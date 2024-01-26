function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;

  while (number > 1) {
    if (number % factor === 0) {
      number /= factor;
      largestFactor = factor;
    } else {
      factor++;
    }
  }

  return largestFactor;
}

// Testing the function
console.log(largestPrimeFactor(24));  // Output: 3
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143));  // Output: 6857
