function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Compare characters from both ends
  for (let i = 0, j = cleanStr.length - 1; i < j; i++, j--) {
    if (cleanStr[i] !== cleanStr[j]) {
      return false;
    }
  }
  
  return true;
}

// Usage example
console.log(isPalindrome("level"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal: Panama"));    // true
