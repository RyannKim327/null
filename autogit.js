function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return alphanumericStr === reversedStr;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
