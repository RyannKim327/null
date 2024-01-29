function isPalindrome(str) {
  // Remove non-alphanumeric characters
  const alphanumericStr = str.replace(/[\W_]/g, '');
  
  // Convert the string to lowercase
  const lowercaseStr = alphanumericStr.toLowerCase();
  
  // Reverse the string
  const reversedStr = lowercaseStr.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return lowercaseStr === reversedStr;
}

// Example usage
const str1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str1)); // Output: true

const str2 = "race a car";
console.log(isPalindrome(str2)); // Output: false
