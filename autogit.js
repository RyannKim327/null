function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  // Compare the cleaned string with the reversed string
  return cleanedStr === reversedStr;
}

// Example usage
const word = "racecar";
const result = isPalindrome(word);
console.log(result); // Output: true

const phrase = "A man, a plan, a canal: Panama";
const result2 = isPalindrome(phrase);
console.log(result2); // Output: true
