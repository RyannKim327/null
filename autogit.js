function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// Example usage
console.log(factorialRecursive(5)); // Output: 120
function factorialLoop(n) {
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Example usage
console.log(factorialLoop(5)); // Output: 120
