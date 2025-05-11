function factorial(n: number): number {
  if (n <= 1) {
    return 1; // base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // recursive case
  }
}

// Example usage:
console.log(factorial(5)); // Output: 120
