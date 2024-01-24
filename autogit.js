function findStringLength(string) {
  let count = 0;
  while (string[count] !== undefined) {
    count++;
  }
  return count;
}

// Example usage:
const text = "Hello, World!";
const length = findStringLength(text);
console.log(length); // Output: 13
