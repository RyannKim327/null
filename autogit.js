function factorial(n) {
  // Base case: factorial of 0 or 1 is always 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: multiply n by factorial of (n-1)
  return n * factorial(n - 1);
}

// Test the factorial function
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
