function factorial(num) {
  if (num === 0) {
    // Base case: 0! = 1
    return 1;
  } else {
    // Recursive case: num! = num * (num - 1)!
    return num * factorial(num - 1);
  }
}

// Example usage
console.log(factorial(5)); // Output: 120
