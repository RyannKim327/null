function factorial(num) {
  if (num === 0) {
    return 1;  // base case: factorial of 0 is 1
  } else {
    return num * factorial(num - 1);  // recursive case: multiply num with factorial(num - 1)
  }
}

// Example usage
console.log(factorial(5));  // Output: 120
