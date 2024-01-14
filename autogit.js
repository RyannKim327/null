function factorialLoop(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log(factorialLoop(5)); // Output: 120
function factorialRecursion(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialRecursion(num - 1);
  }
}

// Example usage:
console.log(factorialRecursion(5)); // Output: 120
