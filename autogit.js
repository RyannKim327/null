function factorialLoop(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

console.log(factorialLoop(5)); // 120
function factorialRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorialRecursion(n - 1);
}

console.log(factorialRecursion(5)); // 120
