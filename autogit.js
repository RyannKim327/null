function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare the cleaned string with its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("Hello, World!")); // false
