function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the reversed version with the original version
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello world")); // Output: false
