function isPalindrome(str) {
  // Remove special characters and convert to lowercase
  var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  
  // Reverse the string
  var reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the original and reversed strings are equal
  return cleanStr === reversedStr;
}

// Test the function
var str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str)); // Output: true
