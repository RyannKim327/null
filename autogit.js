function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedStr = processedStr.split('').reverse().join('');

  // Compare the reversed string to the original string
  return processedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("Hello, World!")); // false
