function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare characters from start and end
  let start = 0;
  let end = alphanumericStr.length - 1;
  while (start < end) {
    if (alphanumericStr[start] !== alphanumericStr[end]) {
      return false; // characters don't match
    }
    start++;
    end--;
  }
  return true; // all characters matched
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello")); // false
