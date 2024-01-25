function getStringLength(string) {
  let count = 0;
  for (let i = 0; string[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Example usage:
const str = "Hello, World!";
const length = getStringLength(str);
console.log(length); // Output: 13
