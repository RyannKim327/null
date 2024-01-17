function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}
const result = factorialRecursive(5);
console.log(result); // Output: 120
