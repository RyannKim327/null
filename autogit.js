function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage:
console.log(factorial(5)); // outputs 120
