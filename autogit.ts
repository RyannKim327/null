function factorial(n: number): number {
  if (n <= 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Outputs 120
