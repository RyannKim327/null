function factorial(n) {
  // Base case: if the number is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: call the factorial function with n-1
  // and multiply the result by n
  return n * factorial(n - 1);
}

// Example usage: calculate the factorial of 5
console.log(factorial(5)); // Output: 120
