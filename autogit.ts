function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalized = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');
  
  // Check if the normalized string is the same as its reverse
  return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("Racecar"));     // true
console.log(isPalindrome("Hello"));       // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
