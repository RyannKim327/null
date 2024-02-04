function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return alphanumericStr === reversedStr;
}

// Example usage
console.log(isPalindrome('level'));      // Output: true
console.log(isPalindrome('Hello'));      // Output: false
console.log(isPalindrome('A man, a plan, a canal: Panama'));   // Output: true
