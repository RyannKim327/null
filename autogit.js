function isPalindrome(str) {
  // Removing spaces and converting to lowercase
  str = str.replace(/\s/g, '').toLowerCase();

  // Reversing the string
  const reversedStr = str.split('').reverse().join('');

  // Comparing the reversed string with the original
  return str === reversedStr;
}

// Testing the function
console.log(isPalindrome("level"));         // true
console.log(isPalindrome("Racecar"));       // true
console.log(isPalindrome("hello world"));   // false
