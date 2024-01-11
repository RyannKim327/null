function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversed = str.split('').reverse().join('');

  // Compare the original string with the reversed string
  return str === reversed;
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race car')); // true
console.log(isPalindrome('hello world')); // false
