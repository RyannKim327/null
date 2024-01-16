function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// Usage
console.log(factorialRecursive(5)); // Output: 120
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Usage
console.log(factorialIterative(5)); // Output: 120
