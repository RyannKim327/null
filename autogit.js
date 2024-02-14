function factorialRecursive(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: multiply n by the factorial of n-1
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); // Output: 120
