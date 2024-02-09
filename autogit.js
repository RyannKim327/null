function largestPrimeFactor(number) {
  let largestFactor = 0;
  let primeFactor = 2;

  while (primeFactor <= number) {
    if (number % primeFactor === 0) {
      largestFactor = primeFactor;
      number /= primeFactor;
    } else {
      primeFactor++;
    }
  }

  return largestFactor;
}
console.log(largestPrimeFactor(13195)); // Output: 29
