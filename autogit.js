function factorialIterative(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}
console.log(factorialIterative(5));    // Output: 120
console.log(factorialRecursive(5));    // Output: 120
