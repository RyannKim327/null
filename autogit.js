function stringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Example usage
const myString = "Hello, World!";
const length = stringLength(myString);
console.log(length); // Output: 13
