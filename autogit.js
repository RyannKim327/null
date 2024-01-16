function stringLength(str) {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

// Example usage:
const myString = "Hello, World!";
const length = stringLength(myString);
console.log(length); // Output: 13
