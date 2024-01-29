function factorialRecursive(num) {
  // Base case: factorial of 0 and 1 is 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursive case: call the function again with num-1
  return num * factorialRecursive(num - 1);
}

// Example usage:
console.log(factorialRecursive(5)); // Output: 120
