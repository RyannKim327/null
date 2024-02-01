function factorial(n) {
  if (n === 0 || n === 1) { // base case
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
