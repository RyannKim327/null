function findStringLength(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

// Example usage:
const myString = "Hello, World!";
const length = findStringLength(myString);
console.log(length); // Output: 13
