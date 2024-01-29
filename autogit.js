function isPalindrome(text) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the cleaned string
  const reversedText = cleanedText.split('').reverse().join('');

  // Compare the cleaned string with the reversed string
  return cleanedText === reversedText;
}
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
