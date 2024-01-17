function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Compare the original and reversed strings
  return cleanedStr === reversedStr;
}

// Usage
const str1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(str1)); // Output: true

const str2 = "Hello, world!";
console.log(isPalindrome(str2)); // Output: false
