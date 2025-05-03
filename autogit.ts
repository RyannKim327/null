function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric chars and convert to lowercase
  const normalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');

  // Compare original normalized string with reversed
  return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("Racecar"));      // true
console.log(isPalindrome("Hello, World!")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
