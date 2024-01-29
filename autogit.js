function largestPrimeFactor(number) {
  let factor = 2;
  
  while (factor * factor <= number) {
    if (number % factor === 0) {
      number = number / factor;
    } else {
      factor++;
    }
  }
  
  return number;
}

// Example usage
const number = 13195;
const largestFactor = largestPrimeFactor(number);

console.log("Largest prime factor of", number, "is", largestFactor);
