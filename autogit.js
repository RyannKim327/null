function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorial(5)); // Output: 120
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
