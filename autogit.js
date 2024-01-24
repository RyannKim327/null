function factorial(n) {
  // Base case: 0! and 1! are both equal to 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: call the factorial function with n-1
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));  // Output: 120
