function reverseWords(str) {
  // Split the string into an array of words
  var words = str.split(' ');
  
  // Reverse the array of words
  var reversedWords = words.reverse();
  
  // Join the reversed words into a string
  var reversedString = reversedWords.join(' ');
  
  return reversedString;
}

var originalString = "Hello world!";

// Call the function and print the result
console.log(reverseWords(originalString));
world! Hello
function reverseWords(str) {
  // Split the string into an array of words
  var words = str.split(' ');
  
  // Reverse the order of words using a custom reverse function
  var reversedWords = reverseArray(words);
  
  // Join the reversed words into a string
  var reversedString = reversedWords.join(' ');
  
  return reversedString;
}

// Custom function to reverse an array
function reverseArray(arr) {
  var reversedArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

var originalString = "Hello world!";

// Call the function and print the result
console.log(reverseWords(originalString));
world! Hello
