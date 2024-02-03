function factorialLoop(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialLoop(5)); // Output: 120
function factorialRecursion(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(5)); // Output: 120
