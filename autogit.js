function isPalindrome(str) {
  // Preprocess the string
  const processedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Create a reversed version of the string
  const reversedStr = processedStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return processedStr === reversedStr;
}

// Example usage
const input = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(input)); // Output: true
