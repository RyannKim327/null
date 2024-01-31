function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Compare the cleaned string with the reversed string
  return cleanedStr === reversedStr;
}

// Example Usage:
const string1 = "racecar";
console.log(isPalindrome(string1)); // Output: true

const string2 = "Hello World!";
console.log(isPalindrome(string2)); // Output: false
