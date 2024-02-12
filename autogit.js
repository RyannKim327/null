function largestPrimeFactor(number) {
  let factor = 2;
  
  while (factor <= number) {
    if (number % factor === 0) {
      number /= factor;
    } else {
      factor++;
    }
  }
  
  return factor;
}
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143));  // Output: 6857
