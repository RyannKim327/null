function factorialLoop(number) {
  // Check for edge cases
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}
function factorialRecursive(number) {
  // Check for edge cases
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorialRecursive(number - 1);
}
console.log(factorialLoop(5)); // Output: 120
console.log(factorialRecursive(5)); // Output: 120
