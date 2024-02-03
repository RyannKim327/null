function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the original and reversed strings
  return alphanumericStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
