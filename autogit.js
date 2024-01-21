function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the clean string and the reversed string are equal
  return cleanStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello")); // Output: false
