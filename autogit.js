function getStringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

// Example usage
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length); // Output: 13
