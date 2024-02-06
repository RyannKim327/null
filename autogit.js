function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  
  // Reverse the string
  var reversedStr = cleanedStr.split("").reverse().join("");
  
  // Compare the reversed string with the original string
  return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
