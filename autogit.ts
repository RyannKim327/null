function factorial(n: number): number {
  if (n <= 1) {
    return 1;  // Base case: 0! = 1 and 1! = 1
  }
  return n * factorial(n - 1);  // Recursive case
}

// Example:
console.log(factorial(5)); // Output: 120
