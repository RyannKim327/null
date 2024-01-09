function factorial(num) {
  if (num === 0 || num === 1)
    return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// Example usage:
console.log(factorial(5));  // Output: 120
