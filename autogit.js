function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Reverse the string
  let reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return cleanedStr === reversedStr;
}

// Example usage
let str1 = "Madam"; // A valid palindrome
console.log(isPalindrome(str1)); // Output: true

let str2 = "Hello World"; // Not a palindrome
console.log(isPalindrome(str2)); // Output: false
