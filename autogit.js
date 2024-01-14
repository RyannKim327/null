function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the clean string with its reversed version
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome('racecar'));   // true
console.log(isPalindrome('hello'));     // false
console.log(isPalindrome('A man, a plan, a canal. Panama!'));  // true
