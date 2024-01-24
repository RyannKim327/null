function largestPrimeFactor(number) {
  // code goes here
}
function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;
  // code continues...
}
function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;

  while (number > 1) {
    if (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    } else {
      factor++;
    }
  }
  
  return largestFactor;
}
function largestPrimeFactor(number) {
  let factor = 2;
  let largestFactor = 1;

  while (number > 1) {
    if (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    } else {
      factor++;
    }
  }
  
  return largestFactor;
}

// Example usage:
console.log(largestPrimeFactor(13195));  // Output: 29
