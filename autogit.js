function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedStr = sanitizedStr.split('').reverse().join('');
  
  // Compare the original string with its reversed version
  return sanitizedStr === reversedStr;
}

// Examples
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
