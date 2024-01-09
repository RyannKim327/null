function findStringLength(str) {
  var count = 0;
  for (var i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// Example usage:
var myString = "Hello, world!";
var length = findStringLength(myString);
console.log("Length:", length);
