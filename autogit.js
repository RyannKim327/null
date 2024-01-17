function factorialLoop(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
function factorialRecursive(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}
console.log(factorialLoop(5));       // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorialRecursive(7));  // Output: 5040 (7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040)
