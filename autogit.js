function isPalindrome(str) {
  var i = 0; // Start from the beginning of the string
  var j = str.length - 1; // Start from the end of the string

  // Compare characters from both ends until i < j
  while (i < j) {
    // If characters don't match, return false
    if (str[i] !== str[j]) {
      return false;
    }
    i++; // Move i to the next character
    j--; // Move j to the previous character
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("")); // true
