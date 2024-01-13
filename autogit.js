function isPalindrome(str) {
  // Remove non-alphanumeric characters (optional)
  str = str.replace(/[^A-Za-z0-9]/g, '');

  // Convert to lowercase (optional)
  str = str.toLowerCase();

  // Reverse the string
  var reversedStr = str.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// Example usage
console.log(isPalindrome('Madam')); // Output: true
console.log(isPalindrome('Racecar')); // Output: true
console.log(isPalindrome('Hello')); // Output: false
