function getStringLength(str) {
  var count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}
var myString = "Hello, world!";
var length = getStringLength(myString);
console.log(length); // Outputs: 13
