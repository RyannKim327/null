function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length);  // Output: 13
