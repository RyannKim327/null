function isPalindrome(str) {
  // Remove non-alphanumeric characters
  var alphanumeric = str.replace(/[\W_]/g, '');

  // Convert to lowercase
  var lowercase = alphanumeric.toLowerCase();

  // Reverse the string
  var reversed = lowercase.split('').reverse().join('');

  // Compare reversed string with the original string
  return lowercase === reversed;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal - Panama")); // true
console.log(isPalindrome("Hello world")); // false
console.log(isPalindrome("racecar")); // true
