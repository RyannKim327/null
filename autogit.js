function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
// Calculate the factorial of 5
console.log(factorial(5)); // Output: 120

// Calculate the factorial of 10
console.log(factorial(10)); // Output: 3628800
