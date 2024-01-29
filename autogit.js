function factorialRecursive(num) {
  if (num === 0) {
    // Base case: factorial of 0 is 1
    return 1;
  } else {
    // Recursive case: factorial of num is num multiplied by factorial of num-1
    return num * factorialRecursive(num - 1);
  }
}
// Calculate factorial of 5
const result = factorialRecursive(5);
console.log(result);  // Output: 120
