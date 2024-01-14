function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the original string with its reverse
  return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Testing the function
console.log(isPalindrome("level"));           // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));   // true
console.log(isPalindrome("hello"));           // false
console.log(isPalindrome("12321"));           // true
console.log(isPalindrome("racecar"));         // true
