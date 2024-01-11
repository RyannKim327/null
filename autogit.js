function factorial(n) {
  // Base case: when n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: factorial(n) = n * factorial(n-1)
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120
