function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  var formattedStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Reverse the formatted string
  var reversedStr = formattedStr.split('').reverse().join('');
  
  // Check if the reversed string is equal to the original formatted string
  return formattedStr === reversedStr;
}

// Example usage
var string1 = "radar";
console.log(isPalindrome(string1)); // Output: true

var string2 = "Hello, World!";
console.log(isPalindrome(string2)); // Output: false
