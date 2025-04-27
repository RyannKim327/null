function factorial(n: number): number {
  if (n <= 1) {
    return 1; // Base case: factorial(1) is 1, and factorial(0) is also 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
