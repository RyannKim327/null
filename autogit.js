function largestPrimeFactor(number) {
  let maxPrime = 1;
  
  while (number % 2 === 0) {
    maxPrime = 2;
    number /= 2;
  }
  
  let divisor = 3;
  let maxFactor = Math.sqrt(number);
  
  while (divisor <= maxFactor) {
    if (number % divisor === 0) {
      maxPrime = divisor;
      number /= divisor;
      maxFactor = Math.sqrt(number);
    } else {
      divisor += 2;
    }
  }
  
  if (number > 2) {
    maxPrime = number;
  }
  
  return maxPrime;
}

// Example usage:
console.log(largestPrimeFactor(13195)); // Output: 29
