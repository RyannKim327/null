function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the string with its reverse
  return formattedStr === formattedStr.split("").reverse().join("");
}

// Example usage:
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
