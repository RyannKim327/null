function reverseWords(str) {
  // Step 1: Split the string into an array of words
  var wordsArr = str.split(" ");

  // Step 2: Reverse the order of the array
  var reversedWordsArr = wordsArr.reverse();

  // Step 3: Join the array elements into a string
  var reversedStr = reversedWordsArr.join(" ");

  return reversedStr;
}

// Example usage
var inputString = "Hello World!";
var reversedString = reverseWords(inputString);
console.log(reversedString);  // Output: "World! Hello"
