function findStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

// Example usage:
const myString = "Hello, world!";
const stringLength = findStringLength(myString);
console.log(stringLength); // Output: 13
