function largestPrimeFactor(number) {
  let factor = 2;
  
  while (factor * factor <= number) {
    // Check if number is divisible by factor
    if (number % factor === 0) {
      // Update the number by dividing it by factor
      number /= factor;
    } else {
      // Increment factor if number is not divisible
      factor++;
    }
  }
  
  // Return the last factor, which is the largest prime factor
  return number;
}

// Example usage
console.log(largestPrimeFactor(13195));  // Output: 29
