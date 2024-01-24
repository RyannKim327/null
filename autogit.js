function findStringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Example usage
const myString = "Hello, World!";
console.log(findStringLength(myString)); // Output: 13
