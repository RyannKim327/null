function isPalindrome(str: string): boolean {
  // Normalize the string: make lowercase and remove non-alphanumeric characters
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the normalized string
  const reversed = normalized.split('').reverse().join('');
  // Compare the normalized string with the reversed one
  return normalized === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello, world!")); // false
