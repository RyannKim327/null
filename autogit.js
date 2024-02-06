function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');
  
  // Compare the modified string with its reversed version
  return modifiedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("level")); // true
console.log(isPalindrome("A car, a man, a maraca")); // true
console.log(isPalindrome("hello")); // false
