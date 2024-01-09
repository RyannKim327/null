function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage
console.log(factorialLoop(5)); // Output: 120
function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursion(n - 1);
}

// Example usage
console.log(factorialRecursion(5)); // Output: 120
