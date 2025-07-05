function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lower case
  const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Compare cleaned string to its reversed version
  return cleanedStr === reversedStr;
}

// Example usage:
const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "Hello, World!";
console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
