function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Reverse the string
  const reverseStr = cleanStr.split('').reverse().join('');
  
  // Compare the reversed string with the original string
  return cleanStr === reverseStr;
}

// Examples
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("hello world")); // false
