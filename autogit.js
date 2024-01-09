function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
