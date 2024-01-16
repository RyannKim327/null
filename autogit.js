function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Compare original and reversed strings
  return cleanStr === reversedStr;
}

// Usage example
const string = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(string)); // Output: true
