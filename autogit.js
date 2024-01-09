function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  var simplifiedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the simplified string
  var reversedStr = simplifiedStr.split('').reverse().join('');
  
  // Check if the simplified string and the reversed string are the same
  return simplifiedStr === reversedStr;
}

// Example usage:
var str = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str)); // Output: true
