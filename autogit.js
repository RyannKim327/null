function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  let formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  let reversedStr = formattedStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return formattedStr === reversedStr;
}

// Example usage
let string = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(string));  // Output: true
