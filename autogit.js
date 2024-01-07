function calculateFactorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: calculate factorial of n-1 and multiply it with n
  return n * calculateFactorial(n - 1);
}

// Example usage:
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(6)); // Output: 720
