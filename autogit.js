function factorialRecursive(n) {
  // Base case: factorial of 0 or 1 is always 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: call the function again with (n-1) and multiply it by n
    return n * factorialRecursive(n - 1);
  }
}

// Test the function
console.log(factorialRecursive(5)); // Output: 120
