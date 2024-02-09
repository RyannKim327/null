function getStringLength(str) {
  var length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

// Example usage:
var string = "Hello, world!";
var length = getStringLength(string);
console.log(length); // Output: 13
