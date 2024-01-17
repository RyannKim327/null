function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return cleanedStr === reversedStr;
}

// Test cases
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
