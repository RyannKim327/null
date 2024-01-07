function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reversed version
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Check if the cleaned string and its reversed version are the same
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello world")); // false
