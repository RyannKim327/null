function factorial(n) {
  // Base case: factorial of 0 or 1 is always 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: call the factorial function with (n-1) as the argument
  return n * factorial(n - 1);
}

// Usage example
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
