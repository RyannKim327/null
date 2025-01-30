function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function factorial(n: number): number {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // outputs 120
function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  // recursive or iterative implementation here
}
