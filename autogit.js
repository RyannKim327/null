function factorial(number) {
  // Initialize the result to 1
  let result = 1;

  // Multiply the result by every integer from 1 to the number
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  // Return the final result
  return result;
}

// Example usage
console.log(factorial(5)); // Output: 120
