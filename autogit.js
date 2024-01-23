function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Usage
console.log(factorial(5)); // Output: 120
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

// Usage
console.log(factorial(5)); // Output: 120
