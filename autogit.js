function largestPrimeFactor(number) {
  let result = 1;
  
  while (number % 2 === 0) {
    result = 2;
    number /= 2;
  }
  
  for (let factor = 3; factor <= Math.sqrt(number); factor += 2) {
    while (number % factor === 0) {
      result = factor;
      number /= factor;
    }
  }
  
  if (number > 1) {
    result = number;
  }
  
  return result;
}

// Example usage
console.log(largestPrimeFactor(24));  // Output: 3
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143));  // Output: 6857
