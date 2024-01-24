function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = str.split('').reverse().join('');

  // Compare the original and reversed strings
  return str === reversedStr;
}

// Example usage
const str1 = "racecar";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
