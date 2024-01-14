function factorial(n) {
  if (n === 0) {
    return 1; // base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // recursive case: n! = n * (n-1)!
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
