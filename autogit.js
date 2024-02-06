function calculateFactorialLoop(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}
function calculateFactorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorialRecursive(num - 1);
}
console.log(calculateFactorialLoop(5)); // Output: 120
console.log(calculateFactorialRecursive(5)); // Output: 120
