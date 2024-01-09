function getStringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Example usage
const testString = "Hello, World!";
const length = getStringLength(testString);
console.log(length); // Output: 13
