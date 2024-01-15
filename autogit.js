function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  // for accurate comparison
  const sanitizedString = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string
  const reversedString = sanitizedString.split('').reverse().join('');

  // Compare the original and reversed strings
  return sanitizedString === reversedString;
}

// Test case
const string = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(string)); // Output: true
