function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return cleanedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
