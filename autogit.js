function getStringLength(str) {
  let count = 0;
  
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  
  return count;
}

// Example usage:
const string = "Hello, World!";
const length = getStringLength(string);
console.log(length); // Output: 13
