function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');

  // Compare the modified string with its reversed version
  return modifiedStr === reversedStr;
}

// Example usage
const string1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "Hello, world!";
console.log(isPalindrome(string2)); // Output: false
