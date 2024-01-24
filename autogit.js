function isPalindrome(str) {
  // Remove whitespace and convert to lowercase
  var lowerCaseStr = str.toLowerCase().replace(/\s/g, '');
  
  // Reverse the string
  var reversedStr = lowerCaseStr.split('').reverse().join('');
  
  // Compare the original and reversed strings
  if (lowerCaseStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// Example usage
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('Hello, World!')); // Output: false
