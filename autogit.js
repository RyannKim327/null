function getStringLength(str) {
  var count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

// Example usage
var myString = "Hello, World!";
var length = getStringLength(myString);

console.log(length); // Output: 13
