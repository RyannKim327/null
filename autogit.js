function largestPrimeFactor(num) {
  if (num < 2) {
    return "Number should be greater than or equal to 2";
  }

  let factor = 2;

  while (factor * factor <= num) {
    if (num % factor === 0) {
      num = num / factor;
    } else {
      factor++;
    }
  }

  if (num > 1) {
    return num;
  }
  
  return factor;
}

// Example usage
console.log(largestPrimeFactor(13195));  // Output: 29
console.log(largestPrimeFactor(600851475143));  // Output: 6857
