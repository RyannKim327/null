function getStringLength(str) {
  var length = 0;
  
  while (str[length] !== undefined) {
    length++;
  }
  
  return length;
}

// Example usage:
var myString = "Hello, world!";
var length = getStringLength(myString);
console.log(length); // Outputs: 13
