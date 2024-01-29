function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  
  // Recursive call
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(8)); // Output: 40320
