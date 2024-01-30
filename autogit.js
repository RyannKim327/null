function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[\W_]+/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanStr === reversedStr;
}

// Example usage
const string1 = 'racecar';
console.log(isPalindrome(string1)); // Output: true

const string2 = 'hello';
console.log(isPalindrome(string2)); // Output: false
