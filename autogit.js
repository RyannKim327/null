function reverseString(str) {
  // Convert string to an array
  var arr = str.split('');

  // Reverse the order of elements in the array
  var reversedArr = arr.reverse();

  // Convert the reversed array back into a string
  var reversedStr = reversedArr.join('');

  // Return the reversed string
  return reversedStr;
}

var originalString = "Hello, world!";
var reversedString = reverseString(originalString);

console.log(reversedString); // Output: "!dlrow ,olleH"
