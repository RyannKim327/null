function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');

  // Compare the modified string with the reversed string
  return modifiedStr === reversedStr;
}

// Example usage:
const input = 'A man, a plan, a canal - Panama!';
const result = isPalindrome(input);
console.log(result); // Output: true
