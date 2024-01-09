function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = formattedStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return formattedStr === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, world!")); // Output: false
