function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return alphanumericStr === reversedStr;
}

// Usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
