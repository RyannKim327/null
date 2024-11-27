function reverseString(str) {
  return str.split('').reverse().join('');
}

var inputString = "hello";
var reversedString = reverseString(inputString);

console.log(reversedString); // Output: "olleh"
