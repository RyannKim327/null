function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/\W/g, '').toLowerCase();
  
  // Compare the clean string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
