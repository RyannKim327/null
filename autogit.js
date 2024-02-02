function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage
let str1 = "racecar";
console.log(isPalindrome(str1)); // true

let str2 = "hello world";
console.log(isPalindrome(str2)); // false
