function isPalindrome(str) {
  // Clean up the string by removing non-alphanumeric characters and converting to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return cleanStr === reversedStr;
}

// Example usage
const str1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str1));  // Output: true

const str2 = "racecar";
console.log(isPalindrome(str2));  // Output: true

const str3 = "hello";
console.log(isPalindrome(str3));  // Output: false
