function isPalindrome(str) {
  // Clean and normalize the input string
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the reversed string is equal to the original cleaned string
  return cleanStr === reversedStr;
}

// Example usage
const input = "A man, a plan, a canal, Panama";
console.log(isPalindrome(input));  // Output: true
