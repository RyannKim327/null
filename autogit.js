function factorialIterative(num) {
  if (num < 0) {
    return "Factorial not defined for negative numbers";
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log(factorialIterative(5));  // Output: 120
function factorialRecursive(num) {
  if (num < 0) {
    return "Factorial not defined for negative numbers";
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

// Example usage
console.log(factorialRecursive(5));  // Output: 120
