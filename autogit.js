function largestPrimeFactor(number) {
  let largestFactor = 1;

  // Dividing by 2 until it's no longer divisible
  while (number % 2 === 0) {
    largestFactor = 2;
    number /= 2;
  }

  // Finding factors using odd numbers
  let factor = 3;
  let maxFactor = Math.sqrt(number);

  while (factor <= maxFactor) {
    if (number % factor === 0) {
      largestFactor = factor;
      number /= factor;
    } else {
      factor += 2;
    }
  }

  // If the remaining number is larger than largestFactor, update largestFactor
  if (number > 2) {
    largestFactor = number;
  }

  return largestFactor;
}

// Example usage
const number = 84;
const result = largestPrimeFactor(number);
console.log(result); // Output: 7
