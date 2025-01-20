function factorial(n: number): number {
  if (n === 0) {
    return 1; // base case: 0! = 1
  } else {
    return n * factorial(n - 1); // recursive case: n! = n * (n-1)!
  }
}
console.log(factorial(5)); // outputs 120
console.log(factorial(3)); // outputs 6
console.log(factorial(0)); // outputs 1
