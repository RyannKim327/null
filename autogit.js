function factorial(n) {
  if (n === 0) {
    // Base case: 0! = 1
    return 1;
  } else {
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
