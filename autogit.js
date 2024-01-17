function factorialRecursive(num) {
  if (num === 0) return 1;       // base case: factorial of 0 is 1
  return num * factorialRecursive(num - 1);  // recursive call
}

console.log(factorialRecursive(5));  // Output: 120
function factorialIterative(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5));  // Output: 120
