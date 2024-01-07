function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Example usage:
console.log(factorialRecursive(5)); // 120
function factorialIterative(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

// Example usage:
console.log(factorialIterative(5)); // 120
