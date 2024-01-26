function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720
