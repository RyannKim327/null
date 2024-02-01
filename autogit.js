function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Create reversed version of the string
  const reversedStr = formattedStr.split('').reverse().join('');

  // Compare the original string with the reversed version
  return formattedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal, Panama.')); // Output: true
console.log(isPalindrome('Hello, World!')); // Output: false
