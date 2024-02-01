function findStringLength(str) {
  var count = 0;
  var index = 0;
  while (str[index] !== undefined) {
    count++;
    index++;
  }
  return count;
}

var myString = "Hello, World!";
var length = findStringLength(myString);
console.log(length); // Output: 13
