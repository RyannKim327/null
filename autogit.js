function findStringLength(str) {
  var length = 0;
  
  for (var i = 0; i < str.length; i++) {
    length++;
  }
  
  return length;
}

var myString = "Hello, World!";
var stringLength = findStringLength(myString);

console.log("Length of string:", stringLength);
