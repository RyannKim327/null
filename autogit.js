function factorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }
  
  // Recursive case
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120
