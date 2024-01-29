function findStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

// Example usage
const myString = "Hello, world!";
const length = findStringLength(myString);
console.log(length); // Output: 13
