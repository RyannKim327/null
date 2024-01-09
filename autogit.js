function calculateStringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Usage
const exampleString = "Hello, World!";
const length = calculateStringLength(exampleString);
console.log(length); // Output: 13
