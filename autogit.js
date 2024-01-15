function findStringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

// Example usage:
const myString = "Hello, World!";
const stringLength = findStringLength(myString);
console.log(stringLength); // Output: 13
