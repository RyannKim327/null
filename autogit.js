function factorialLoop(num) {
  if (num < 0) {
    return -1; // Factorial of negative numbers is undefined
  } else if (num === 0 || num === 1) {
    return 1; // Factorial of 0 or 1 is always 1
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorialLoop(5)); // Output: 120
function factorialRecursion(num) {
  if (num < 0) {
    return -1; // Factorial of negative numbers is undefined
  } else if (num === 0 || num === 1) {
    return 1; // Factorial of 0 or 1 is always 1
  } else {
    return num * factorialRecursion(num - 1);
  }
}

console.log(factorialRecursion(5)); // Output: 120
