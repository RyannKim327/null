function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the string
  let reversedStr = formattedStr.split('').reverse().join('');

  // Compare the reversed string with the original string
  return formattedStr === reversedStr;
}

// Example usage
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
