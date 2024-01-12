function factorial(n) {
  // Base case: factorial of 0 or 1 is always 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: call the function with a smaller input
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
