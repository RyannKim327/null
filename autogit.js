function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

// Example usage:
const string = "Hello, World!";
const length = getStringLength(string);
console.log(length); // Output: 13
