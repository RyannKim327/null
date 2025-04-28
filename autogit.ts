function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric and lowercase
  const sanitized = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the sanitized string
  const reversed = sanitized.split('').reverse().join('');
  
  // Check if sanitized string equals its reverse
  return sanitized === reversed;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello")); // false
