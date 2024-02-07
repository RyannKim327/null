function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');

  // Check if the reversed string is the same as the original string
  return modifiedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
