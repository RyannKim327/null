function factorialRecursive(num) {
  // Base case: factorial of 0 is 1
  if (num === 0) {
    return 1;
  }

  // Recursive case: multiply num by factorial of num - 1
  return num * factorialRecursive(num - 1);
}

// Example usage
console.log(factorialRecursive(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
