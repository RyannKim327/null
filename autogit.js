function isPalindrome(str) {
  // Step 1: Remove non-alphanumeric characters
  const alphanumericStr = str.replace(/[^A-Za-z0-9]/g, '');

  // Step 2: Convert to lowercase
  const lowerCaseStr = alphanumericStr.toLowerCase();

  // Step 3: Compare with its reverse
  const reversedStr = lowerCaseStr.split('').reverse().join('');
  return lowerCaseStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race car"));                      // true
console.log(isPalindrome("hello"));                         // false
