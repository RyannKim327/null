function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the formatted string
  const reversedStr = formattedStr.split('').reverse().join('');

  // Compare the formatted string with its reverse
  return formattedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("12321")); // true
