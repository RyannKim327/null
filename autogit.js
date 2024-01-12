function factorial(n) {
  // Base case: if the number is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: call the factorial function with n-1, and multiply it by n
  return n * factorial(n - 1);
}

// Test the factorial function
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800
